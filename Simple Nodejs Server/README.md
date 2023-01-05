# simple-nodejs-server

To run this code, save it as a `server.js` file and run ``node server.js in`` your terminal.-->

This code first includes the Node.js http module.

Node.js has a fantastic standard library, including first-class support for networking.

The `createServer()` method of http creates a new `HTTP` server and returns it.

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.

Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

The second is used to return data to the caller.

In this case with:

```
res.statusCode = 200;
```

we set the statusCode property to 200, to indicate a successful response.

We set the Content-Type header:

```
res.setHeader('Content-Type', 'text/plain');
```

and we close the response, adding the content as an argument to `end()`:

```
res.end('Hello World\n');
```
