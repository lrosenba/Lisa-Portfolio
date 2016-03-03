var express = require('express');
var router = express.Router();
var github = require('octonode');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ChicGeek' });
});

router.get('/whatsmymutt', function(req, res, next) {
  res.render('whatsmymutt', { title: 'ChicGeek' });
});

router.get('/webprofile', function(req, res, next) {
  res.render('webprofile', { title: 'ChicGeek' });
});

router.get('/webprofile/getProfile', function(req, res, next) {
  var client = github.client();
  client.get('/users/lrosenba1', {}, function (err, status, body, headers) {
    console.log(body);
    res.json(body);
  });
});

module.exports = router;
