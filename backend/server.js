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

mongoose.connect('mongodb://localhost/dashboard'); // even use this on remote prod i think

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/weight').get((req, res) => {
  Weight.find((err, weight) => {
      if (err) { console.log(err); }
      else {
        res.send(weight.sort(timestamp));
      }
  });
});

router.route('/blood-pressure').get((req, res) => {
  BloodPressure.find((err, bloodPressures) => {
      if (err) { console.log(err); }
      else {
        res.send(bloodPressures.sort(timestamp));
      }
  });
});

router.route('/drinks').get((req, res) => {
  Drink.find((err, drinks) => {
      if (err) { console.log(err); }
      else {
        res.send(drinks.sort(timestamp));
      }
  });
});

router.route('/heart-rate').get((req, res) => {
  HeartRate.find((err, heartRates) => {
      if (err) { console.log(err); }
      else {
        let sortedHeartRates = heartRates.sort(timestamp);
        let mostRecent = sortedHeartRates[sortedHeartRates.length - 1];
        let mostRecentTimestamp = mostRecent.timestamp;
        let oneDayPrevTimestamp = mostRecentTimestamp - ( 24 * 60 * 60 );
        let i = 0;
        let heartRatesLastDay = sortedHeartRates.filter(function(heartRate) {
          if ( heartRate.timestamp < oneDayPrevTimestamp || heartRate.max < 15 ) {
            return false;
          } else {
            return true;
          }
        });
        res.json(heartRatesLastDay);
      }
  });
});

router.route('/meditation').get((req, res) => {
  Meditation.find((err, meditations) => {
      if (err) { console.log(err); }
      else {
        res.json(meditations.sort(timestamp));
      }
  });
});

router.route('/sleep').get((req, res) => {
  Sleep.find((err, sleep) => {
      if (err) { console.log(err); }
      else {
        res.json(sleep.sort(timestamp));
      }
  });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));

// takes array of objects where each object has a .date property in
// m/d/yy format and adds a .timestamp property to each object
function addTimestampProperty(arr) {
  for (let i=0; i<arr.length; i++) {
    let dateStr = arr[i].date;
    let dateArr = dateStr.split('/');
    let month = dateArr[0] < 10 ? '0' + dateArr[0] : dateArr[0];
    let day = dateArr[1] < 10 ? '0' + dateArr[1] : dateArr[1];
    let year = '20' + dateArr[2];
    let datetime = new Date(year + '-' + month + '-' + day);
    arr[i].timestamp = datetime.getTime();
    // console.log(arr[i])
  }
  return arr;
}

/* sorting helper function */
/* https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript */
function timestamp(a,b) {
  if (a.timestamp < b.timestamp)
    return -1;
  if (a.timestamp > b.timestamp)
    return 1;
  return 0;
}

function compare(a,b) {
  if (a.timestamp < b.timestamp)
    return -1;
  if (a.timestamp > b.timestamp)
    return 1;
  return 0;
}

function compareMementoId(a,b) {
  if (a.MEMENTO_ID < b.MEMENTO_ID)
    return -1;
  if (a.MEMENTO_ID > b.MEMENTO_ID)
    return 1;
  return 0;
}
