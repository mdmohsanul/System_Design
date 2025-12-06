## http - hyper text transfer protocol

## The difference between http and https is the protocol

- The data we are sending in http will go on plain text but in https provide one layer to that data and encrypt the data.

- URL -> Unified Resource Locator
- URI ->
- URN ->

## What are http headers

metadata ---> key-value sent along with request and response

headers uses in:-

- caching
- authentication
- manage state

1. Request headers --> from client
2. Response Headers --> from Server
3. Representation Headers --> encoding / compression (for compressed data)
4. Payload Headers --> data

# Most common headers

- Accept : application/json --> APIs
- User-Agent --> It tells from which application the request comes (from which browser, or postman)
- Authorization --> Bearer token (JWT Token)
- Content-Type (file,image,pdf)
- Cookies --> {}
- cache-control

# CORS

- Access-Control-Allow-Origin
- Access-Control-Allow-Credentials
- Access-Control-Allow-Method

# Security

- Cross-Origin-Embedder-Policy
- Cross-Origin-Opener-Policy
- Content-Security-Policy
- X-XSS-Protection

## HTTP Methods

- Basic set of operations that can be used to interact with server.

• GET : retrieve a resource
• HEAD : No message body (response headers only)
• OPTIONS : what operations available
• TRACE : loopback test (get some data)
• DELETE : remove a resource
• PUT : replace a resource
• POST : interact with resource ( mostly add)
• PATCH : change part of a resource

## Status code

- 1\*\* : Informatinal
- 2\*\* : Success
- 3\*\* : Redirection
- 4\*\* : Client Error
- 5\*\* : Server Error

100 - Continue
102 Processing
200 - OK
201 - Created
202 - Accepted
307 - Temporary redirect
308 - Permanent redirect
400 - bad request
401 - Unauthorized
402 - Payment required
404 - Not Found
500 - Internal Server Error
504 - Gateway timeout
