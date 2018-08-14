const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let BloodPressureSchema = new Schema({
//     _id: {type: String},
//     timestamp: {type: String},
//     date: {type: String},
//     pressure: {type: String},
//     comment: {type: String}
// });

const BloodPressureSchema = new Schema({
  date: {type: String},
  top: {type: String},
  bottom: {type: String},
  id: {type: String},
  comment: {type: String},
  MEMENTO_ID: {type: String}
}, { collection: 'bloodpressure'});

module.exports = mongoose.model('BloodPressure', BloodPressureSchema, 'bloodpressure');
