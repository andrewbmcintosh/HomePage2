const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PingSchema = new Schema({
  member: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  currentStatus: {
    type: String
  },
  places: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Place'
    }
  ],
  ping_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Ping = mongoose.model('ping', PingSchema);
