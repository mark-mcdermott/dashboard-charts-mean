import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let HeartRate = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    date: {type: String},
    start: {type: String},
    end: {type: String},
    average: {type: String},
    max: {type: String},
    min: {type: String}
});

export default mongoose.model('HeartRate', HeartRate, 'heartrate');
