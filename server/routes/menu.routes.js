const router = require('express').Router();
const menuController = require("../controllers/menu.controller");

router.get("/getAll", menuController.getAll);
router.post("/add", menuController.addItem);
router.put("/modif/:menuId", menuController.modifItem);
router.delete("/delete/:menuId", menuController.deleteItem);

module.exports = router;
