const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MeditationSchema = new Schema({
    id: {type: String},
    minutes: {type: String},
    date: {type: String},
    timestamp: {type: String},
    app: {type: String},
    location: {type: String},
    style: {type: String},
    hours: {type: String},
    comment: {type: String}
}, { collection: 'meditation'});

module.exports = mongoose.model('Meditation', MeditationSchema, 'meditation');
