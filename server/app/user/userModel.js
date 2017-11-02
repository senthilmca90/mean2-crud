const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	email: String
});

const user = mongoose.model('user', userSchema);
module.exports = user;