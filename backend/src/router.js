const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const {
  validInscription,
  checkUserFree,
  registerUser,
} = require("./middlewares/inscription");

router.post("/inscription", validInscription, checkUserFree, registerUser);

const {
  validConnexion,
  checkUserExist,
  tokenConnexion,
  logOut,
} = require("./middlewares/connexion");

router.post("/connexion", validConnexion, checkUserExist, tokenConnexion);
router.get("/ciao", logOut);

const postControllers = require("./controllers/postControllers");

router.get("/posts", postControllers.browse);
router.post("/posts", postControllers.add);
router.put("/posts/:id", postControllers.edit);
router.delete("/posts/:id", postControllers.destroy);

// Gestionnaire d'erreurs
const { errorHandler } = require("./middlewares/errorHandler");

router.use(errorHandler);

// 404 not found
router.use("*", (req, res) => res.sendStatus(404));
/* ************************************************************************* */

module.exports = router;
