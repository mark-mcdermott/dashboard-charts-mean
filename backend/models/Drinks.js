import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Drinks = new Schema({
    _id: {type: String},
    timestamp: {type: String},
    date: {type: String},
    waters: {type: String},
    coffees: {type: String},
    coffees: {type: String}
});

export default mongoose.model('Drinks', Drinks, 'drinks');
