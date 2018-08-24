const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BloodPressureSchema = new Schema({
  id: {type: String},
  date: {type: String},
  top: {type: String},
  bottom: {type: String},
  timestamp: {type: String},
  comment: {type: String},
}, { collection: 'bloodpressure'});

module.exports = mongoose.model('BloodPressure', BloodPressureSchema, 'bloodpressure');
