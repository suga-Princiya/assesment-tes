const Item = require('../Models/item');

exports.createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
};

app.get('/items', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch items' });
    }
  });