const express = require('express');
const mongoose = require('mongoose');

//mongoose connection
const connection = mongoose.connect('mongodb://localhost/node_crud',{useMongoClient:true});
mongoose.Promise = global.Promise;

module.exports = connection;