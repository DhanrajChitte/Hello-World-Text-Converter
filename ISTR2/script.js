function getMessage() {
  const language = document.getElementById("language").value;
  fetch(`http://localhost:5000/hello?language=${language}`)
    .then((response) => response.text())
    .then((data) => {
      const resultElement = document.getElementById("result");

      // Remove existing language classes
      resultElement.classList.remove("English", "French", "Hindi");

      // Update the message text
      resultElement.innerHTML = `${data}`;

      // Add the appropriate class to change color based on the language selected
      if (language === "English") {
        resultElement.classList.add("English");
      } else if (language === "French") {
        resultElement.classList.add("French");
      } else if (language === "Hindi") {
        resultElement.classList.add("Hindi");
      }
    })

    .catch((err) => {
      document.getElementById("result").innerHTML =
        "Error: Unable to get the message";
    });
}
