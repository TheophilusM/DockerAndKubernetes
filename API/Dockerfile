# `docker run -d -p <host-port>:<container-port> <image-name>:<image-tag>`
FROM node:latest
WORKDIR /app
ADD . /app 
# or ADD . .
RUN npm install
CMD node index.js

# to create image -> docker build -t web-api-image:latest .
# to run container -> docker run --name web-api-container -d -p 3000:3000 node-web:latest