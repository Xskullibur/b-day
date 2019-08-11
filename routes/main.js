var express = require('express');
var router = express.Router();
var moment = require('moment')

/**
 * Data
 */

 const INFO = {
    eventDate: moment('2019-09-27').format('Do MMMM YYYY'),
    eventTime: '20:30 - 02:00',
    eventVenue: 'Arcade Warehouse'
 }

const PLAYERS = [
  "Joel", "Shawn", "Jonah", "Ryan", "James", "Tee Chin", "Damien", "Raphel", "Zheng Teck", "Lance",
  "Jolyn", "Yusuf", "Tudy", "Jedrick", "Le Cong", "Wenjing",
  "Chia Feng", "Andrew", "Wen Qing", "Wen Hong", "Hong Yi",
  "Jayden", "Hui Xin", "Lindy",
  "Sam Fang", "Sam Lee", "Chen Yee", "Nat Sia", "Lionel", "Wei Feng",
	"Alson", "Alwyn", "Jayna"
]

router.use((req, res, next) => {
  if (req.user !== null || req.user !== undefined) {
    next()
  }
  else{
    res.render('login', {
      error: 'Invalid Player...',
      status: "UNAUTHORIZED"
    })
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {
    status: "UNAUTHORIZED"
  })
});

router.post('/login', function(req, res) {

  if (req.body.passcode && PLAYERS.map(a => a.toLowerCase()).includes(req.body.passcode.toLowerCase())) {
    let userName = req.body.passcode.toUpperCase()
    let status = "LIVE"

    res.render('index', {
      userName,
      status,
      INFO,
      PLAYERS
    })

  }
  else{
    res.render('login', {
      error: "Invalid Player...",
      status: "UNAUTHORIZED"
    })
  }
})

module.exports = router;
