var http = require('https');
var fs = require('fs');
const mongoose = require('mongoose');
var csv = require('./modules/csv');
var BloodPressure = require('./models/BloodPressure');
var Drink = require('./models/Drink');
var Meditation = require('./models/Meditation');
var Sleep = require('./models/Sleep');
var Weight = require('./models/Weight');
var HeartRate = require('./models/HeartRate');

var googleSheets = {
  weight: {
    name: 'weight',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSuYDvnTDopjD9RWbo9Iyc0vINCd-zn7opMUvKtoaJty-ZIVqj0sJy8YhTkdoC_3sa8lxU98tOFeqAV/pub?gid=67032540&single=true&output=csv',
    headers: ['id','weight','comment','date','timestamp'],
    model: 'Weight'
  },
  bloodpressure: {
    name: 'bloodpressure',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTalv-Sq749bFzZCZkmpEEYQxlqi2Zkb5O7qmImdWym2FvRXWeIS6UKwL1CYobfzvlsD8c4gxhI9yOg/pub?output=csv',
    headers: ['id','date','top','bottom','timestamp','comment'],
    model: 'BloodPressure'
  },
  drinks: {
    name: 'drinks',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8Eehe9IzvfOvICgYn9f2BvGIRqmkJ3s4_vtxXUf6T4KeyuL0czkdPTa3kzQO2RMQPt7r1cRnT3nU3/pub?gid=2003083552&single=true&output=csv',
    headers: ['id','coffees','waters','beers','date','timestamp'],
    model: 'Drink'
  },
  heartrate: {
    name: 'heartrate',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSm6kO8i2XPca4OLFk7eH5RW99g6cGEhtfS913XDeT2J7HW1olBZfbErOsuuxeKu7h9aobgtZGE96U0/pub?gid=0&single=true&output=csv',
    headers: ['id','timestamp','date','start','end','average','max','min'],
    model: 'HeartRate'
  },
  meditation: {
    name: 'meditation',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSitq8TztWUQ6IK7gltRKywBQTPfNvKI_jlI7IZj8jPBAh6ZqXW4K4i27h9EsYqMxzN70VYaaK-DbP3/pub?gid=573538169&single=true&output=csv',
    headers: ['id','minutes','date','timestamp','app','location','style','hours','comment'],
    model: 'Meditation'
  },
  sleep: {
    name: 'sleep',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRT8fHMtlnDGH5EsbTtWnYXvrTnkVyurLA6b7c9o9mGj9rcsacnbkjxUGpU8hXmUBGBWRFsj2QnmGNJ/pub?gid=438064067&single=true&output=csv',
    headers: ['id','date','timestamp','hours','comment'],
    model: 'Sleep'
  }
}

// gSheetsCsvToMongo(googleSheets.heartrate);
gSheetsCsvToMongo(googleSheets.heartrate);
// gSheetsToMongo(googleSheets.meditation);
// gSheetsToMongo(googleSheets.sleep);
// gSheetsCsvToMongo(googleSheets.weight);
// localCsvToMongo(googleSheets.weight);

function gSheetsCsvToMongo(sheetName) {
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

function localCsvToMongo(sheetName) {
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
}
