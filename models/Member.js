const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  name: {
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
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Member = mongoose.model('member', MemberSchema);
