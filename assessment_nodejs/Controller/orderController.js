const DeliveryVehicle = require('../Models/deliveryVehicle');
const Item = require('../Models/item');
const Order = require('../Models/order');

exports.createOrder = async (req, res) => {
  try {
    const { itemId, customerId, deliveryCity } = req.body;

    const deliveryVehicle = await DeliveryVehicle.findOne({
      city: deliveryCity,
      activeOrdersCount: { $lt: 2 } 
    });

    if (!deliveryVehicle) {
      return res.status(400).json({ error: 'No available delivery vehicles for this city' });
    }

    // Fetch the item's price
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Create a new order
    const newOrder = new Order({
      itemId,
      price: item.price,
      customerId,
      deliveryVehicleId: deliveryVehicle._id,
      isDelivered: false
    });

    // Update the delivery vehicle's activeOrdersCount
    deliveryVehicle.activeOrdersCount += 1;
    await deliveryVehicle.save();

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

