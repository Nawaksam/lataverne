const express = require("express");

const router = express.Router();

const commentControllers = require("../controllers/commentControllers");

router.get("/:postId", commentControllers.read);
router.post("/", commentControllers.add);
router.put("/:id", commentControllers.edit);
router.delete("/:id", commentControllers.destroy);

module.exports = router;
