var express = require('express')
var router =express.Router();
var tokenVerify = require('./tokenVerify')

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

var createTodo = require('./creatTodo')
//router.post('/createTodo',tokenVerify.tokenVerify,createTodo.createTodo)
router.post('/createTodo',createTodo.createTodo)
var registration = require('./registration')
router.post('/register', registration.registration)
var login = require('./login')
router.post('/login', login.login)
module.exports = router;