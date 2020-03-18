const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();
const port = "3000";

app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/v1/gifs", routes);

app.listen(port, () => {
  process.stdout.write(`Server is up and running on port number ${port}`);
});
