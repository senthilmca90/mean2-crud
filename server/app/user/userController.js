const express = require('express');
const userModel = require('./userModel');
var Promise = require('promise');

class User {

}

//get All User details
User.prototype.index = (req, res) => {
    userModel.find({}).then((err, result) => {
        if (err)
            res.send(err)
        res.send(result);
    })
}

//get User details by Id
User.prototype.getUserById = (req, res) => {
    let id = req.params.id;
    userModel.findById(id).then((err, result) => {
        if (err)
            res.send(err)
        res.send(result);
    })
}

//update user details by Id
User.prototype.updateUserById = (req, res) => {
    var id = req.body._id;
    var obj = req.body;

    userModel.findByIdAndUpdate(id, {
        name: obj.name,
        email: obj.email
    }, {
        new: true
    }).then((err, result) => {
        if (err) return res.send(err);
        res.send(result);
    });

}

//delete user details by Id
User.prototype.deleteUserById = (req, res) => {
    var id = req.params.id;
    userModel.findByIdAndRemove(id).then((err, result) => {
        if (err) return res.send(err);
        res.send(result);
    });

}

//New user Register
User.prototype.registerUser = (req, res) => {
    let userObj = req.body;    
    let user = new userModel(userObj);

    user.save().then((err, result) => {
        if (err)
            res.send(err);
        res.send(result);
    });
}

module.exports = User;