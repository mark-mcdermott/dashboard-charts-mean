const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SleepSchema = new Schema({
    id: {type: String},
    date: {type: String},
    timestamp: {type: String},
    hours: {type: String},
    comment: {type: String}
}, { collection: 'sleep'});

module.exports = mongoose.model('Sleep', SleepSchema, 'sleep');
