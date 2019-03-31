const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  placeId: {
    type: String,
    required: true
  },
  northeastLat: {
    type: String
    // required: true
  },
  northeastLng: {
    type: String
    // required: true
  },
  southwestLat: {
    type: String
    // required: true
  },
  southwestLng: {
    type: String
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Place = mongoose.model('place', PlaceSchema);
