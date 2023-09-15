const Router = require("express");
const router = new Router();
const sub_type_tenderController = require("../controllers/sub_type_tenderController");
const { checkRole } = require("../middleware/checkMiddleware");

router.post("/", sub_type_tenderController.create);
router.get("/", sub_type_tenderController.getAll);

module.exports = router;
