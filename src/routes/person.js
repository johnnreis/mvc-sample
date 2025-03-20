const express = require('express');
const ControllerPerson = require('../controllers/person');

const controller = new ControllerPerson();

const router = express.Router();

router.get('/api/v1/values', controller.getAll)
router.get('/api/v1/value/:id', controller.get)
router.post('/api/v1/value', controller.create)
router.put('/api/v1/value/:id', controller.update)
router.delete('/api/v1/value/:id', controller.delete)

module.exports = router;