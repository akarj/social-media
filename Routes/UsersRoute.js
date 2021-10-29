const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`Hello users from router!!`);
});

module.exports = router;
