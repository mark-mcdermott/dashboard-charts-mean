import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let BloodPressure = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    date: {type: String},
    pressure: {type: String},
    comment: {type: String}
});

export default mongoose.model('BloodPressure', BloodPressure, 'bloodpressure');
