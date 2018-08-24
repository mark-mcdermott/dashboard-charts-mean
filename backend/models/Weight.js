const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WeightSchema = new Schema({
    id: {type: String},
    weight: {type: String},
    comment: {type: String},
    date: {type: String},
    timestamp: {type: String}
}, { collection: 'weight'});

module.exports = mongoose.model('Weight', WeightSchema, 'weight');
