## TECHNOLOGIES USED
   ### BACKEND: NodeJS,ExpressJS,JSON
    Backend Deploy: Render
   ### FRONTEND: HTML,CSS,JavaScript
    Frontend Deploy: Netlify With Backend Integrity with Render

### Render URL for API: 
 https://hello-world-conversion-backend.onrender.com/ 
### Netlify URL for Frontend: 
 https://hello-world-conversion-lang.netlify.app/

## API Development,Deployment and How To Run?
  ### Development
  1.First I was install all the dependencies/modules that required to completing of our task such as the express,cors,etc.using the command 
  npm install...
  2.After that I was crete the JSON files in which files give the respective language Hello World Conversion such as the English,French and Hindi.
  3.The JSON files in the translations folder then set the directory,path for taking input from JSON files.
  4.After that according to the user selction language in a query parameter the respective language Hello World Conversion was select.
  5.If the language is not match from the above three languages then show the error message lang.not supported.
  6.If the any of the JSON file is empty then show the error messages and also show other HTTP error messages mention in API md file.

  ### Deployment API
    1.Create Git repository and push all the backend codes on it.
    2. Then Login to my render account Dashboard.Click on New and select Web Service and coonect to my Github account and select the repository.
    3. Give the Name,Branch,Runtime,Build Command npm install and also start command and then deploy and link was create for the backend.

  ### How to Run?
    1.After installing all the modules and JSON files in root directory.
    2.Run the Hello_World.js file means API file using the command node Hello_World.js from the root directory.Make sure JSON files in the translation directory in root folder.

  ## Frontend How to Run? Deploy and Develp
    1.All the files of frontend in a root directory including index.html, style.css and script.js.
    2.Open the HTML file using open with live server.

  ## Deploy
    1.Create Git repository and push all the frontend codes on it.
    2.Then Login to my netlify account.Go to the Dashboard and select Create a new Site then select git provider and select the git repository.
    3.Give the name,branch,build command of the site.
    4.For deploying frontend I make sure that the link from the render for deploying the backend put in the server.js JavaScript file instead of the local machine URL 5000 port wala URL.
    

  # Future Plans/Scope
    1.Here we consider Hello World conversion only for three languages if languages are increase then use database instaed of the JSON.
    2.For the Actual conversion of the Hello World in its respective lang.we can use Google converter setting in API.But this is third party conversion process. 



  
   
