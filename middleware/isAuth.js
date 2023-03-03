const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "Not authorized!!" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const foundUser = await User.findOne({ _id: decoded.id });
    if (!foundUser) {
      return res.status(401).send({ errors: [{ msg: "Not authorized!!" }] });
    }
    req.user = foundUser;
    next();
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "Not authorized!!" }] });
  }
};

module.exports = isAuth;

const isAuthAdmin = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "Not authorized!!" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY_ADMIN);
    const foundAdmin = await Admin.findOne({ _id: decoded.id });
    if (!foundAdmin) {
      return res.status(401).send({ errors: [{ msg: "Not authorized!!" }] });
    }
    req.admin = foundAdmin;
    next();
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "Not authorized!!" }] });
  }
};

module.exports = isAuthAdmin;
