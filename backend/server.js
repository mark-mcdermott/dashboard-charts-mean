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
      if (err) { console.log(err); }
      else { res.json(bloodPressure.sort(compare)); }
  });
});

router.route('/drinks').get((req, res) => {
  Drinks.find((err, drinks) => {
      if (err) { console.log(err); }
      else { res.json(drinks.sort(compare)); }
  });
});

router.route('/heartrate').get((req, res) => {
  HeartRate.find((err, heartRate) => {
      if (err) { console.log(err); }
      else { res.json(heartRate.sort(compare)); }
  });
});

router.route('/meditation').get((req, res) => {
  Meditation.find((err, meditation) => {
      if (err) { console.log(err); }
      else { res.json(meditation.sort(compare)); }
  });
});

router.route('/sleep').get((req, res) => {
  Sleep.find((err, sleep) => {
      if (err) { console.log(err); }
      else { res.json(sleep.sort(compare)); }
  });
});

router.route('/weight').get((req, res) => {
  Weight.find((err, weight) => {
      if (err) { console.log(err); }
      else { res.json(weight.sort(compare)); }
  });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));



/* sorting helper function */
/* https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript */
function compare(a,b) {
  if (a.timestamp < b.timestamp)
    return -1;
  if (a.timestamp > b.timestamp)
    return 1;
  return 0;
}
