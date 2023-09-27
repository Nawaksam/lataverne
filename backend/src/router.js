const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const {
  validConnexion,
  checkUserExist,
  tokenConnexion,
} = require("./middlewares/connexion");

router.post("/connexion", validConnexion, checkUserExist, tokenConnexion);

const {
  validInscription,
  checkUserFree,
  registerUser,
} = require("./middlewares/inscription");

router.post("/inscription", validInscription, checkUserFree, registerUser);

// Gestionnaire d'erreurs
const { errorHandler } = require("./middlewares/errorHandler");

router.use(errorHandler);

// 404 not found
router.use("*", (req, res) => res.sendStatus(404));
/* ************************************************************************* */

module.exports = router;
