const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PingSchema = new Schema({
  memberId: {
    type: Schema.Types.ObjectId,
    ref: 'Member'
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  },
  ping_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Ping = mongoose.model('ping', PingSchema);
