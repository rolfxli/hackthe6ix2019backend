import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let URLs = new Schema({
    filename: {
        type: String
    },
    random: {
        type: Number
    }
});

export default mongoose.model('URLs', URLs)
