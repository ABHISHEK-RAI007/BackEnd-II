const express = require('express');
const userController = require('../controller/user')

const router  = express.Router();

// Create-API POST /productS   C R U D
router
.post('/', userController.createUser )

// Read-API GET /Users
.get('/', userController.getAllUsers)

// Read-API GET /products/ :id
.get('/:id', userController.getUser)

// Update  PUT /products/ :id
.put('/:id', userController.replaceUsert)

// Update  PATCH /products/ :id
.patch('/:id', userController.updateUser)

// Delete DELETE /products/ :id
.delete('/:id', userController.deleteUser)


exports.router = router;