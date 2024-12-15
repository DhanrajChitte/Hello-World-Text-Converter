## Hello_World Conversion API for the different languages such as English,French and Hindi
GET/hello

## Request Headers
   Content-Type:application/json

#### Request Params/Query Parameters
   "language"="String"

## Response
  200-Success(OK)

Body
  msgText,
  Message:"Message Get Successful to the required language"

400 - Bad Request (json)
    {
        "Error_Message": "The requested language is not supported"
    }

400- Bad Request (json)
    {
         Error_Message: "msgText is undefined in the translation file.
    }

404- Not Found (json)
    {
        Error_Message: "Resource not found"
    }
     

500 - Internal Server Error (json)
    {
        Error_Message: "Internal Server Error"
    }