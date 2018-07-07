import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Weight = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    datetime: {type: String},
    weight: {type: String},
    comment: {type: String}
});

export default mongoose.model('Weight', Weight, 'weight');
