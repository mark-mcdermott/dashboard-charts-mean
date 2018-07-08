const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const BloodPressure = require ('./models/BloodPressure');
const Drink = require ('./models/Drink');
const HeartRate = require ('./models/HeartRate');
const Meditation = require ('./models/Meditation');
const Sleep = require ('./models/Sleep');
const Weight = require ('./models/Weight');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/dashboard');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/blood-pressure').get((req, res) => {
  BloodPressure.find((err, bloodPressures) => {
      if (err) { console.log(err); }
      else { res.json(bloodPressures.sort(compare)); }
  });
});

router.route('/drinks').get((req, res) => {
  Drink.find((err, drinks) => {
      if (err) { console.log(err); }
      else { res.json(drinks.sort(compare)); }
  });
});

router.route('/heart-rate').get((req, res) => {
  HeartRate.find((err, heartRates) => {
      if (err) { console.log(err); }
      else { res.json(heartRates.sort(compare)); }
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
