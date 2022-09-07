const express = require("express");
const app = express();
const port = 3000;
const { logger } = require("./logger");
const { logRequest } = require("./log.middleware");

app.use(logRequest);
app.get("/", (req, res) => {
  logger.info({ some: "data" }, "This is a test");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
