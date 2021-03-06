const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Ping = require('../../models/Ping');
const Member = require('../../models/Member');
// @route   GET api/Pings
// @desc    Get All Pings
// @access  Public
router.get('/pings', (req, res) => {
  Ping.find()
    .sort({ date: -1 })
    .then(pings => res.json(pings));
});

// @route   POST api/pings
// @desc    Create A Item
// @access  Private
// BELOW IS AUTH ROUTE
// router.post('/', auth, (req, res) => {
router.post('/pings', (req, res) => {
  const { memberId, lat, lng } = req.body;
  Member.find()
    .then(members => console.log(members))
    .catch(err => console.log(err));

  const newPing = new Ping({
    memberId,
    lat,
    lng
  });

  newPing.save().then(ping => res.json(ping));
});

// @route   DELETE api/pings/:id
// @desc    Delete a Item
// @access  Private
// router.delete('/:id', auth, (req, res) => {
//   Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));
// });

module.exports = router;
