---
created: 2023-10-29
updated: 2023-10-29
---
# gRPC vs REST: Understanding gRPC, OpenAPI and REST and when to use them in API design

## Metadata
- Author: Martin Nally
- Category: article
- URL: https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them
## Highlights

REST

A signature characteristic of this style of API is that clients do not construct URLs from other information—they just use the URLs that are passed out by the server as-is.

The only parsing of a URL that a browser does is to extract the information required to send an HTTP request, and the only construction of URLs that a browser does is to form an absolute URL from relative and base URLs.

gRPC

The way a client uses a gRPC API is by following these three steps:

1.  Decide which procedure to call
    
2.  Calculate the parameter values to use (if any)
    
3.  Use a code-generated stub to make the call, passing the parameter values

Note: A code module is installed and used to connect with the service, as opposed to using URL.
e.g openai, firebase

![[9. Resources#API]]