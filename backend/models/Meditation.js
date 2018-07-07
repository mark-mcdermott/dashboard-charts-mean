import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Meditation = new Schema({
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

export default mongoose.model('Meditation', Meditation, 'meditation');
