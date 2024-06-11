const Category = require("../Model/categoryModel");
const Item = require("../Model/ItemModel");

const getCategory = async (req, res) => {
  const {category} = req.params;
//   console.log(category);
  try {
    const categoryData = await Category.findOne({ name: category});
    if (!categoryData) {
      return res.status(404).json({message:'Category not found!'});
    }
    const items = await Item.find({ menuId: categoryData.menuId });
    // console.log(items)
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "No category Available" });
  }
};

module.exports={
    getCategory
}