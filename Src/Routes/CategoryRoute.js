const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/CategoryController')

router.get('/categories/:category',categoryController.getCategory)

module.exports=router;