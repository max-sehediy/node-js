var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Hello',
    name: 'Maksym',
    appName: 'myapp',
    color: false,
    arr: ['green', 'black']

  });
});


module.exports = router;
