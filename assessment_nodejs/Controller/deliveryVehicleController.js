const DeliveryVehicle = require('../Models/deliveryVehicle');

exports.createDeliveryVehicle = async (req, res) => {
  try {
    const newVehicle = await DeliveryVehicle.create(req.body);
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create delivery vehicle' });
  }
};


app.get('/delivery-vehicles', async (req, res) => {
    try {
      const vehicles = await DeliveryVehicle.find();
      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch delivery vehicles' });
    }
  });