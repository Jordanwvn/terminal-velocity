'use strict';

const mongoose = require('mongoose');


const Track = mongoose.Schema({
  title: {type: String, required: true},
  filepath: {type: String, required: true},
}, {timestamps: true});


module.exports = mongoose.model('track', Track);
