const router = require("express").Router();
const Post = require("../Models/PostModel");
const User = require("../Models/UserModel");

//[Posts route entry]
router.get("/", (req, res) => {
  return res.send("welcome to Post route!!");
});

//[Create A Post]
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    console.log("Error in creating New Post!!");
    return res.status(500).json(err);
  }
});

//[Update A Post]
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      return res.status(200).json({ message: "Post has been Updated!!" });
    } else {
      return res
        .status(403)
        .json({ message: "You can update only your post!!" });
    }
  } catch (err) {
    console.log("Error in ");
    return res.status(500).json({ message: "Error in Updating Post!!" });
  }
});

//[Delete A Post]
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await Post.findByIdAndDelete(post._id);
      return res.status(200).json({ message: "Post has been deleted!!" });
    } else {
      return res
        .status(403)
        .json({ message: "You can delete only your post!!" });
    }
  } catch (err) {
    console.log("Error in Deleting the Post!!");
    return res
      .status(500)
      .json({ message: "Error in deleting Post!!", err: { ...err } });
  }
});

//[Like/Dislike A Post]
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json({ message: "Post has been liked!!" });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json({ message: "Post has been disliked!!" });
    }
  } catch (err) {
    console.log("Error in liking the post!!");
    return res.status(500).json({ message: "Error in like of the post", err });
  }
});

//[Get A Post]
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    console.log({ message: "error in getting the post", err });
    return res.status(500).json({ message: "error in getting the post" });
  }
});

//[Get All Timeline Posts]
router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map(friendId => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    console.log({ message: "error in getting the post", err });
    return res.status(500).json({ message: "error in getting the post" });
  }
});

module.exports = router;
