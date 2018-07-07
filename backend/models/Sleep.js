import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sleep = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    datetime: {type: String},
    hours: {type: String},
    comment: {type: String}
});

export default mongoose.model('Sleep', Sleep, 'sleep');
