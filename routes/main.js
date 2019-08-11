var express = require('express');
var router = express.Router();
var moment = require('moment')

/**
 * Data
 */

 const INFO = {
    eventDate: moment('2019-09-27').format('Do MMMM YYYY'),
    eventTime: '20:00 - 02:00',
    eventVenue: 'Arcade Warehouse'
 }

const PLAYERS = [
  "Joel", "Shawn", "Jonah", "Ryan", "James", "Tee Chin", "Damien", "Raphel", "Zheng Teck", "Chen Yee",
  "Nat Sia", "Lionel", "Sam Fang", "Sam Lee", "Jolyn", "Yusuf", "Tudy", "Jedrick", "Le Cong", "Wenjing",
  "Chia Feng", "Andrew", "Wen Qing", "Wen Hong", "Jing Sheng", "Lindy"
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

  if (req.body.passcode && PLAYERS.includes(req.body.passcode)) {
    let userName = req.body.passcode
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