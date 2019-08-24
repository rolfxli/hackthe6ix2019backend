import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();


//app.get('/', (req, res) => res.send('Hello World!'));
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection established with MongoDB');
});



app.listen(4000, () => {
    console.log('Express server is running on port 4000.')
});
