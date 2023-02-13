const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const date = new Date().toISOString();
  res.status(200).send({ result: "Testing Back4App Containers! Last Restart: ", date});
});

module.exports = router;
