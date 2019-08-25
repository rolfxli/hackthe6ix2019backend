import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Animal from './models/Animal';
import URLs from './models/URLs';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://root:EA9jXzCpOnOP@ec2-18-191-182-197.us-east-2.compute.amazonaws.com:27017/animals?authsource=admin',
    { useNewUrlParser: true }).then(() => {
    console.log('Succesful connection');
}).catch((err) => {
    console.log('FAILED CONNECTION!', err);
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection established with MongoDB');
});

//https://archivedaddy.s3.us-east-2.amazonaws.com/zoo_test.jpg

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


router.route('/urls').get((req, res) => {
    URLs.find((err, urls) => {
        if (err) {
            console.log('Error occured');
        }
        else {
            res.json(urls);
        }
    })
});


app.use('/', router);

app.listen(4000, () => {
    console.log('Express server is running on port 4000.')
});
