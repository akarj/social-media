const router = require("express").Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");

//REGISTER
router.get("/", async (req, res) => {
  res.send(`Hello register from router!!`);
});

router.post("/register", async (req, res) => {
  try {
    //Generate Salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Created the user by taking input from user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //Save user and return response
    const user = await newUser.save();
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("not ok");
  }
});

//lOGIN
router;

module.exports = router;
