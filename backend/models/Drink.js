const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DrinkSchema = new Schema({
    water: {type: String},
    coffee: {type: String},
    beer: {type: String},
    date: {type: String},
    MEMENTO_ID: {type: String}
}, { collection: 'drinks'});

module.exports = mongoose.model('Drink', DrinkSchema, 'drinks');
