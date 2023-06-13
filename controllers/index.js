module.exports = (app) => {
  app.use("/user_games", require("./user_games"));
};
