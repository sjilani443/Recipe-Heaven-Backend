const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/itemController');

router.get('/items', itemController.getAllItems);
router.get('/items/search', itemController.getSearchedItems);
router.get('/items/:id',itemController.getSingleItem)

module.exports = router;
