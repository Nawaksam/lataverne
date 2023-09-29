const express = require("express");

const router = express.Router();

const postControllers = require("../controllers/postControllers");

router.get("/", postControllers.browse);
router.post("/", postControllers.add);
router.put("/:id", postControllers.edit);
router.delete("/:id", postControllers.destroy);

module.exports = router;
