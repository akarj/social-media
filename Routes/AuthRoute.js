const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`Hello Auth from router!!`);
});

module.exports = router;
