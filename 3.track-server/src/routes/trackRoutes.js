const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Track = mongoose.model('Track');
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

module.exports = router;
