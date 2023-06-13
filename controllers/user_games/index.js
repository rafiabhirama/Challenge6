const router = require("express").Router();
const UserGameController = require("./user_game_controller");

const controller = new UserGameController();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.get("/:id/edit", controller.edit);
router.get("/create", controller.create);
router.get("/delete", controller.delete);

router.post("/store", controller.store);
router.post("/:id/update", controller.update);

module.exports = router;
