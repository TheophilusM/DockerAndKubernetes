# `docker run -d -p <host-port>:<container-port> <image-name>:<image-tag>`
FROM nginx:latest
ADD . /usr/share/nginx/html

# to create image -> docker build --tag nginx-web-image:latest .
# to run container -> docker run -d -p 8080:80 nginx-web-container:latest