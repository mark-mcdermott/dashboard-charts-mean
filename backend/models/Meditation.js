const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MeditationSchema = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    datetime: {type: String},
    hours: {type: String},
    minutes: {type: String},
    app: {type: String},
    location: {type: String},
    style: {type: String},
    comment: {type: String}
});

module.exports = mongoose.model('Meditation', MeditationSchema, 'meditation');
