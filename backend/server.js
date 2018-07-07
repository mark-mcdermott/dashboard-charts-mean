import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import BloodPressure from './models/BloodPressure';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/dashboard');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/bloodpressure').get((req, res) => {
    BloodPressure.find((err, bloodPressure) => {
        if (err)
            console.log(err);
        else
            res.json(bloodPressure);
    });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
