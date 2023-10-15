const { error } = require('console');

var express = require('express');

var router = express.Router();

router.get('/', async function(req, res) {
  res.status(200).send('ok')
});

module.exports = router;


