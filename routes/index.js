var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/emily', function(req, res) {
    res.render('emily', { title: 'Dog Page' });
});

module.exports = router;
