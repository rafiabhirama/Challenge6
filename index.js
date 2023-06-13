const express = require("express");
const app = express();
const models = require("./models");
const PORT = 4000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
require("./controllers")(app);

models.sequelize
  .authenticate()
  .then(() => {
    console.log("connected successfully");
    app.listen(PORT, () => {
      console.log("server listening on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
