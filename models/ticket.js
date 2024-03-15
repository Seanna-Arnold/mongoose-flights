
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        required: true,
        match: /[A-F][1-9]\?/
    },
    price: {
      type: Number,
      min: 0
     },
    flight: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: true
  },
  
});

module.exports = mongoose.model('Ticket', ticketSchema)