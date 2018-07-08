const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DrinkSchema = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    date: {type: String},
    waters: {type: String},
    coffees: {type: String},
    coffees: {type: String}
});

module.exports = mongoose.model('Drink', DrinkSchema, 'drinks');
