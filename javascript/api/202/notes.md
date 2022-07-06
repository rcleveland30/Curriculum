# API 202
## Using an instance of `Promise` improves how we handle asynchronous code.

A promise either resolves or rejects. Each is a valid repsonse that we handle inside of `.then` and `.catch` respectively.

### Terms

** `.catch`**
A method chained to the response that the promise returns with `.reject` and within which we pass a callback function to handle the data.

** `.reject`**
A callback function provided by the promise that we call when the execution of asynchronous code was unsuccessful.


** `.resolve`**
A callback function provided by the promise that we call when the execution of asynchronous code was successful.

** `.then`**
A method chained to the response that the promise returns with `.resolve` and within which we pass a callback function to handle the data.


### Snippets 
See index.js