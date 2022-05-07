# `docker run -d -p <host-port>:<container-port> <image-name>:<image-tag>`

# download node latest image version
FROM node:latest

# download node latest image version using alpine
# FROM node:alpine

# download node specific image version
# FROM node:16.13.2-alpine
WORKDIR /app
ADD package*.json /app/
RUN npm install
ADD . .
# COPY . ./
# ENV PORT 3000
ENV PORT=3000
# EXPOSE $PORT
EXPOSE ${PORT}
# CMD node index.js
# CMD ["node",  "index.js"]
CMD ["npm", "run", "dev"]

# to build image -> docker build -t web-api-image:latest .
# to change tag version of duplicate image --from -> docker tag web-api-image:latest web-api-image:1
# to run container -> docker run --name web-api-container -d -p 3000:3000 node-web:latest