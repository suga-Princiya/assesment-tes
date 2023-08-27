const express = require('express');
const router = express.Router();
const deliveryVehicleController = require('../controllers/deliveryVehicleController');

router.post('/', deliveryVehicleController.createDeliveryVehicle);
router.get('/', deliveryVehicleController.getAllDeliveryVehicles);
router.get('/:id', deliveryVehicleController.getDeliveryVehicleById);
router.put('/:id', deliveryVehicleController.updateDeliveryVehicle);
router.delete('/:id', deliveryVehicleController.deleteDeliveryVehicle);

module.exports = router;
