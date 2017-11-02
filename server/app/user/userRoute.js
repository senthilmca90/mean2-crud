const express = require('express');
const router = express.Router();

const userController = require('./userController');

const controller = new userController();

//get All User Api http://localhost:3000/api/user
router.get('/',controller.index);

//New User Register Api http://localhost:3000/api/user
router.post('/',controller.registerUser);

//User Get Details by Id http://localhost:3000/api/user/59f9b83d6b1ac71d8c461588
router.get('/:id',controller.getUserById);

//Update user details by Id http://localhost:3000/api/user/59f9b83d6b1ac71d8c461588
router.put('/',controller.updateUserById);

//Delete user details by Id http://localhost:3000/api/user/59f9b83d6b1ac71d8c461588
router.delete('/:id',controller.deleteUserById);

module.exports = router;