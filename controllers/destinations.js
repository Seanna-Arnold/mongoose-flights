const Flight = require('../models/ticket');

module.exports = {
  create
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    flight.destinations.push({
        destinations: req.body.destinations,
        arrivals: req.body.arrivals,
        airport: req.body.airport
    })
    try {
      // Save any changes made to the flight doc
      await flight.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/flights/${flight._id}`);
  }