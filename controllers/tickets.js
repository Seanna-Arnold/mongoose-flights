const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  create,

  new: newTicket
};

async function create(req, res) {
    const ticket = await Ticket.create(req.body);
    // We can push (or unshift) subdocs into Mongoose arrays
    // ticket.reviews.push(req.body);
    try {
      // Save any changes made to the ticket doc
      // await ticket.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/tickets/${ticket._id}`);
  }

async function newTicket(re, res) {
  res.render('flights/Tickets/new', {title: 'Add Ticket', errorMsg: ''})

}
  