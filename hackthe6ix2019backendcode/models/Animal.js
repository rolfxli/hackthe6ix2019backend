import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Animal = new Schema({
    species: {
        type: String
    },
    count: {
        type: Number
    }
});

export default mongoose.model('Animal', Animal);
