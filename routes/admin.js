const express = require("express");
const { login, register } = require("../controllers/admin");
const isAuthAdmin = require("../middleware/isAuth");
const {
  loginValidation,
  validation,
  registerValidation,
} = require("../middleware/validator");

const router = express.Router();

router.post("/register", registerValidation(), validation, register);

router.post("/login", loginValidation(), validation, login);

router.get("/current", isAuthAdmin, (req, res) => {
  res.send(req.admin);
});

module.exports = router;
