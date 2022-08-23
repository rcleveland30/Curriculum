# Server 103
## Express request object properties cache values sent from the client to the server

`req.body`
- An object that contains key/value pairs sent to the client from the server
- The server must implement middleware to parse JSON
- The request type must be POST

`req.cookies`
- Contains the string that defines a cookie stored in the browser
- The server must implement middleware to parse cookies

`req.params`
- An object of key/value pairs created by param routes and their values

`req.query`
- An object of key/value pairs created by query parameters supplied to the URL
