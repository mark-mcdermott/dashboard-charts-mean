const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WeightSchema = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    datetime: {type: String},
    weight: {type: String},
    comment: {type: String}
});

module.exports = mongoose.model('Weight', WeightSchema, 'weight');
