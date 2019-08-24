import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Animal from './models/Animal';

const app = express();


//app.get('/', (req, res) => res.send('Hello World!'));
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/animals');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection established with MongoDB');
});

router.route('/Animals').get((req, res) => {
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
