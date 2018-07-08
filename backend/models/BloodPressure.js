const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BloodPressureSchema = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    date: {type: String},
    pressure: {type: String},
    comment: {type: String}
});

module.exports = mongoose.model('BloodPressure', BloodPressureSchema, 'bloodpressure');
