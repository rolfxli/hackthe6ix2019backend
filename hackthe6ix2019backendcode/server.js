import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Animal from './models/Animal';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://ec2-18-191-182-197.us-east-2.compute.amazonaws.com:27017/animals');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection established with MongoDB');
});

router.route('/animals').get((req, res) => {
    Animal.find((err, animals) => {
        if (err) {
            console.log('Error occured');
        }
        else {
            res.json(animals);
        }
    })
});

app.use('/', router);

app.listen(4000, () => {
    console.log('Express server is running on port 4000.')
});
