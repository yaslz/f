const bcrypt = require("bcrypt");
const { findOne } = require("../models/User");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const foundAdmin = await Admin.findOne({ email });
    if (foundAdmin) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Email should be unique try again! " }] });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newAdmin = new Admin({ ...req.body });
    newAdmin.password = hashedPassword;
    await newAdmin.save();
    const token = jwt.sign(
      {
        id: newAdmin._id,
      },
      process.env.SECRET_KEY_ADMIN,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .send({ msg: "Register successfully..", admin: newAdmin, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Can not register !!" }] });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundAdmin = await Admin.findOne({ email });
    if (!foundAdmin) {
      return res.status(400).send({ errors: [{ msg: "Bad credential ! " }] });
    }
    const checkPassword = await bcrypt.compare(password, foundAdmin.password);
    if (!checkPassword) {
      return res.status(400).send({ errors: [{ msg: "Bad credential ! " }] });
    }
    const token = jwt.sign(
      {
        id: foundAdmin._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .send({ msg: "Login successfully..", admin: foundAdmin, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Can not login !!" }] });
  }
};
