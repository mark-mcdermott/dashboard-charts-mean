const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HeartRateSchema = new Schema({
    id: {type: String},
    timestamp: {type: String},
    date: {type: String},
    start: {type: String},
    end: {type: String},
    average: {type: String},
    max: {type: String},
    min: {type: String}
});

module.exports = mongoose.model('HeartRate', HeartRateSchema, 'heartrate');
