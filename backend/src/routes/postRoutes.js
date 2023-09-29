const express = require("express");

const router = express.Router();

const postControllers = require("../controllers/postControllers");
const validate = require("../middlewares/validate");

router.get("/", postControllers.browse);
router.post("/", validate.post, postControllers.add);
router.put("/:id", validate.post, postControllers.edit);
router.delete("/:id", postControllers.destroy);

module.exports = router;
