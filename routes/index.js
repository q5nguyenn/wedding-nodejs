var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all wish. */
router.get('/listWish', function (req, res, next) {
  let data = fs.readFileSync('data.json');
  data = JSON.parse(data);
  res.send(data);
});

/* Save a wish. */
router.post('/sendWish', function (req, res, next) {
  let newWish = req.body;
  let data = fs.readFileSync('data.json');
  data = JSON.parse(data);
  data.unshift(newWish);
  data = JSON.stringify(data);
  fs.writeFileSync('data.json', data);
});

module.exports = router;
