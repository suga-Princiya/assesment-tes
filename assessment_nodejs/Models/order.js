const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: Number,
  itemId: mongoose.Schema.Types.ObjectId,
  price: Number,
  customerId: mongoose.Schema.Types.ObjectId,
  deliveryVehicleId: mongoose.Schema.Types.ObjectId,
  isDelivered: { type: Boolean, default: false }
});

module.exports = mongoose.model('Order', orderSchema);
