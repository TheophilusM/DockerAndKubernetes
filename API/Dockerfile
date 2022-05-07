# `docker run -d -p <host-port>:<container-port> <image-name>:<image-tag>`
FROM node:latest
WORKDIR /app
ADD . /app
RUN npm install
CMD node index.js

# to create image -> docker build -t node-web:latest .
# to run container -> docker run -d -p 8080:80 node-web:latest