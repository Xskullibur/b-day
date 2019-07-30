var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {
    status: "UNAUTHORIZED"
  })
});

router.post('/login', function(req, res) {

  var userName
  var status

  if (req.body.passcode) {
    userName = req.body.passcode
    status = "LIVE"    
  }
  else{
    userName = "UNKNOWN"
    status = "UNAUTHORIZED"
  }

  res.render('index', {
    userName,
    status
  })
})

module.exports = router;