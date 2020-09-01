var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')


// GET /flights/new

/* GET users listing. */
router.get('/new', flightsCtrl.new);

module.exports = router;
