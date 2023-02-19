# Introduction to nginx

This git repository serves as a learning resource for the "Introduction to Nginx" course on Udemy, instructed by Hussein
Nasser. The course covers the fundamentals of Nginx, a popular web server and reverse proxy server, and its applications
in web development. The repository contains several directories, each representing a different section or chapter of the
course, and each directory includes code examples, configuration files, and step-by-step instructions on how to
implement various features using Nginx.

# Layer 4 vs layer 7 proxy

In layer 4 load balancing, the load balancer has only access to information from TCP/IP stack (e.g. source ip, source
port, destination ip, destination port, stream of data). Processing streams of data means that the content cannot be
cached. Layer 4 load balancing might be useful for forwarding data from protocols that the load balancer does not know
anyway (e.g. webrtc, mysql, pgsql). This type of load balancing cannot be used with microservices because we usually
want to route traffic based of urls.

In layer 7 load balancing, the load balancer has access to application data (e.g. HTTP, gRPC) which means that the
routing based on headers, cookies or url is possible. The layer works on requests which means that the content can be
cached. The downside of layer 7 load balancing is worse performance because the content of request is usually decrypted.
