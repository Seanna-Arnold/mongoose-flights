const express = require('express');
const router = express.Router();
// You Do - Require the yet to be created addTicket controller 
var addTicketCtrl = require('../controllers/tickets')

// You Do - Define the Route below
router.get('/flights/:id/Tickets/new', addTicketCtrl.new)

module.exports = router;
