const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
	models.Events.findAll()
		.then((data) => {
      res.status(200).json(data);
    });
});

router.post('/', (req, res) => {
  const data = req.body;
	const newEvent = new models.Events(data);
	newEvent.save()
		.then(() => {
      res.status(200).json(newEvent);
		})
		.catch((err) => {
			console.log(err.message);
		});
});

module.exports = router;