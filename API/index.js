const express = require("express");
const app = express();
const { MONGO_PORT } = require("../config/config");

const port = process.env.PORT || 3000;
const mongo_port = MONGO_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port}, and mongo @${mongo_port}`
  );
});

/*

## Commands:
  * npm init
  * packages
    - npm i --save express
    - npm i nodemon --save-dev
  * env variable
  * run
    - node index.js
    - npm run dev
    - npm start

*/
