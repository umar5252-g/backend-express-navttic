const express = require("express");
const PORT = 7777;
const app = express();

app.get("/", (req, res) => {
  res.send("request is processed on git server");
});
app.listen(PORT, () => {
  console.log(`Express server is running....`);
});

//git remote add origin https://github.com/umar5252-g/backend-express-navttic.git
