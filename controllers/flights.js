const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id).populate('tickets')
  res.render('flights/show', {flight, title: 'Flight'})
}


async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', { title: 'All Flights', flights })
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add Flight',
        errorMsg: ''
    })
}

function addTicket(req, res) {
  res.render('/flights/:id/Tickets/new', {
      title: 'Add Flight',
      errorMsg: ''
  })
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      console.log(req.body)
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }
  

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      console.log(req.body)
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/show', { errorMsg: err.message });
    }
  }

  async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      console.log(req.body)
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/:id/Tickets/new', { errorMsg: err.message });
    }
  }



  