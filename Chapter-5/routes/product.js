const express = require('express');
const productController = require('../controller/product');
const router  = express.Router();

// Create-API POST /productS   C R U D
router
.post('/', productController.createUser )

// Read-API GET /products
.get('/', productController.getAllUsers)

// Read-API GET /products/ :id
.get('/:id', productController.getUser)

// Update  PUT /products/ :id
.put('/:id', productController.replaceUser)

// Update  PATCH /products/ :id
.patch('/:id', productController.updateUser)

// Delete DELETE /products/ :id
.delete('/:id', productController.deleteProduct)


exports.router = router;