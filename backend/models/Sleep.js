const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SleepSchema = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    datetime: {type: String},
    hours: {type: String},
    comment: {type: String}
});

module.exports = mongoose.model('Sleep', SleepSchema, 'sleep');
