var express = require('express');
var router = express.Router();

const CommandHandler = require('../services/commandHandler')
const commandHandler = new CommandHandler()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create-account', (req, res) => {
  commandHandler.createAccount(req.body)
  res.statusCode(200)
})

module.exports = router;
