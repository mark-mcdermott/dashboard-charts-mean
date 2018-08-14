var http = require('https');
var fs = require('fs');
const mongoose = require('mongoose');
var csv = require('./modules/csv');
var BloodPressure = require('./models/BloodPressure');
var Drink = require('./models/Drink');

var googleSheets = {
  bloodpressure: {
    name: 'bloodpressure',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTalv-Sq749bFzZCZkmpEEYQxlqi2Zkb5O7qmImdWym2FvRXWeIS6UKwL1CYobfzvlsD8c4gxhI9yOg/pub?gid=1527499934&single=true&output=csv',
    headers: ['date','top','bottom','id','comment','MEMENTO_ID'],
    model: 'BloodPressure'
  },
  drinks: {
    name: 'drinks',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQsprnq9_9BKvtgr_SRALHY2MvVphMnbEb9qBVXOZ40rZVwKZvgd0I9hOWo-xak6_6LgVMYbdcPrDFK/pub?gid=1534891086&single=true&output=csv',
    headers: ['water','coffee','beer','date','MEMENTO_ID'],
    model: 'Drink'
  },
}

//gSheetsToMongo(googleSheets.bloodpressure);
gSheetsToMongo(googleSheets.drinks);

function gSheetsToMongo(sheetName) {
  // get google sheet & export to data.csv
  var file = fs.createWriteStream('./data/csv/' + sheetName['name'] + '.csv');
  var request = http.get(sheetName['url'], function(response) {
    var stream = response.pipe(file);
    stream.on('finish', function() {
      console.log('downloaded ' + sheetName['name'] + '.csv')

      // write csv data to mongo
      mongoose.connect('mongodb://localhost:27017/dashboard', {useNewUrlParser: true});
      var db = mongoose.connection;
      if (typeof db.collections[sheetName['name']] != 'undefined') {
        db.collections[sheetName['name']].drop(function(){
          console.log('dropped ' + googleSheets.name + ' collection')
          csv.importFile('./data/csv/' + sheetName['name'] + '.csv', sheetName['headers'], sheetName['model']);
        });
      } else {
        csv.importFile('./data/csv/' + sheetName['name'] + '.csv', sheetName['headers'], sheetName['model']);
      }
    })
  });
}
