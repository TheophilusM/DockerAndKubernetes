const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*

## Commands:
  * npm init
  * packages
    - npm i --save express
    - npm i nodemon --save-dev
  * env variable
  * node index.js  

*/
