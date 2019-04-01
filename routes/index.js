const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
// const placesController = require('../controllers/placesController');

// router.get('/api/members', memberController.index);
router.post('/api/members', memberController.create);
// router.get('/api/members/:memberId', memberController.show);
// router.patch('/api/members/:memberId', memberController.update);
// router.delete('/api/members/:memberId', memberController.delete)

// router.get('/api/members/:memberId/places', placesController.index);
// router.get('/api/places/:placeId', placesController.show);
// router.delete(
//   '/api/members/:memberId/places/:placeId',
//   placesController.delete
// );
// router.patch('/api/members/:memberId/places/:placeId', placesController.update);
// router.post('/api/members/:memberId/places', placesController.create);

module.exports = router;
