const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DrinkSchema = new Schema({
    id: {type: String},
    coffees: {type: String},
    waters: {type: String},
    beers: {type: String},
    date: {type: String},
    timestamp: {type: String}
}, { collection: 'drinks'});

module.exports = mongoose.model('Drink', DrinkSchema, 'drinks');
