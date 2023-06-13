const models = require("../../models");

class UserGameController {
  async index(req, res) {
    const ListUserGames = await models.Usergame.findAll();
    res.render("index", {});
  }
  async create(req, res) {
    res.render("create", {});
  }
  async edit(req, res) {
    const { id } = ({ req, res } = req.params);
    const userGame = await models.Usergame.findOne({
      where: {
        id: id,
      },
    });
    res.render("edit", {
      data: userGame,
    });
  }
  async show(req, res) {
    const { id } = ({ req, res } = req.params);
    const userGame = await models.Usergame.findOne({
      where: {
        id: id,
      },
    });
    res.render("show", {
      data: userGame,
    });
  }

  async store(req, res) {
    const { username, password } = req.body;

    await models.UserGame.create({
      username: username,
      password: password,
    });

    return res.redirect("/user_games");
  }

  async update(req, res) {
    const { id } = req.params;
    const { username, password } = req.body;

    await models.UserGame.update(
      {
        username,
        password,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.redirect("/user_games");
  }

  async delete(req, res) {
    const { id } = req.params;

    await models.UserGame.destroy({
      where: {
        id,
      },
    });

    return res.redirect("/user_games");
  }
}

module.exports = UserGameController;
