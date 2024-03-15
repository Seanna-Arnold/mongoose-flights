const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    
    destinations: {
        type: String
    },
    airport: {
      type: String,
      required: true,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
     },
    arrivals: {
      type: Date,
  },
  
});

const flightSchema = new Schema({
  airline: {
      type: String,
      required: true
  },
  airport: {
      type: String,
      required: true,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN'
  },
  flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
  },
  departs: {
      type: Date,
      default: () => {
          const currentDate = new Date();
          currentDate.setFullYear(currentDate.getFullYear() + 1);
          return currentDate;
      }
  },
  destinations: [destinationSchema],
  tickets: [{
    type: Schema.Types.ObjectId,
    ref: 'Ticket',
}],
});



module.exports = mongoose.model('Flight', flightSchema)