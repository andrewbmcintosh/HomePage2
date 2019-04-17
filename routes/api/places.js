const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const axios = require('axios');

// Item Model
const Ping = require('../../models/Ping');
const Member = require('../../models/Member');
// @route   GET api/Pings
// @desc    Get All Pings
// @access  Public
router.get('/', (req, res) => {
  Ping.find()
    .sort({ date: -1 })
    .then(pings => res.json(pings));
});

// @route   POST api/pings
// @desc    Create A Item
// @access  Private
// BELOW IS AUTH ROUTE
// router.post('/', auth, (req, res) => {
router.post('/', (req, res) => {
  const { memberId, lat, lng } = req.body;
  const API_KEY = process.env.GEOCODE_API_KEY;
  axios
    .post(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    )
    .then(res => {
      placeData = res.data.results[0].place_id;
      // console.log(placeData[0].place_id);
      console.log(placeData);
    });

  // const newPlace = new Place({
  //   memberId,
  //   lat,
  //   lng
  // });

  // newPing.save().then(ping => res.json(ping));
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
