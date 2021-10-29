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
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(404).json("user not found!!");
    else {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log("validPassword", validPassword);
      if (!validPassword) res.status(401).json("wrong credentials!!");
      else res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
