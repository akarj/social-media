const router = require("express").Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
//[Update User]
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res
          .status(500)
          .json({ message: "error in changing the password", err });
      }
    }
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res
        .status(200)
        .json({ message: "User Details has been updated!!" });
    } catch (err) {
      return res.status(500).json({
        message: "Error in updating user password!!",
        err,
      });
    }
  } else {
    return res.status(403).json("You can update Only Your Account");
  }
});

//[Delete User]
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .json({ message: "User Account has been deleted!!" });
    } catch (err) {
      return res.status(500).json({
        message: "Error in deleting user Account!!",
        err,
      });
    }
  } else {
    return res.status(403).json("You can delete Only Your Account");
  }
});

//[Get A User]
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });

    const { password, updatedAt, createdAt, _id, __v, ...other } = user._doc;

    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json({
      message: "Error in getting User Info!!",
    });
  }
});

//[Follow User]
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        return res.status(200).json({
          message: "Requested User has been followed by the current User!!",
        });
      } else {
        return res
          .status(403)
          .json({ message: "User Already follows the requested user" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error in following the User", err });
    }
  } else {
    res.status(403).json({
      message: "You can't follow yourself!!",
    });
  }
});

//[Unfollow User]
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        return res.status(200).json({
          message: "Requested User has been unfollowed by the current User!!",
        });
      } else {
        return res
          .status(403)
          .json({ message: "User Does not follow requested user" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error in unfollowing the User", err });
    }
  } else {
    res.status(403).json({
      message: "You can't unfollow yourself!!",
    });
  }
});

//get on the user route
router.get("/", (req, res) => {
  res.send(`Hello users from router!!`);
});

module.exports = router;
