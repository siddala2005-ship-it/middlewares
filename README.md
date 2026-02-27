now we will learn about logger 
logger:logger is used to print the requests in console like wt type of requet,path, wt time etc

let create a call back for if any api is not exits 
we will print "page not found"
and it should be placed at the end of the all call backs in app.js
ACTIVITY:lets create an middle-ware for an api that checks if the access token was passed in the query string or not
access token :acts like password
see the code to understand in app.js

MULTIPLE MIDDLEWARES
WHERE A MIDDLEWARE IS SENDED AS A FUNTION IN ANOTHER MIDDLEWARE

"HANDLE ERRORS"
EXPRESS DEFAULT ERROR HANDLER
err middleware