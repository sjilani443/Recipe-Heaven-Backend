const Item = require('../Model/ItemModel');

const getAllItems = async (req, res) => {
  try {
    const result = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
};

const getSearchedItems = async (req, res) => {
  const { q } = req.query;
  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: 'i' } });
    } else {
      items = await Item.find().sort({ createdAt: -1 });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
};

const getSingleItem = async(req,res)=>{
  const {id} = req.params;
  try{
    const item = await Item.findById(id);
    res.json(item)
  }
  catch(err)
  {
    res.status(500).json({message:'No item found'});
  }
}

module.exports = {
  getAllItems,
  getSearchedItems,
  getSingleItem
};
