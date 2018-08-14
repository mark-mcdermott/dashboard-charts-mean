const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BloodPressureSchema = new Schema({
  date: {type: String},
  top: {type: String},
  bottom: {type: String},
  id: {type: String},
  comment: {type: String},
  MEMENTO_ID: {type: String}
}, { collection: 'bloodpressure'});

module.exports = mongoose.model('BloodPressure', BloodPressureSchema, 'bloodpressure');
