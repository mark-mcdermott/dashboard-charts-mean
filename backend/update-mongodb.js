var http = require('https');
var fs = require('fs');
const mongoose = require('mongoose');
var csv = require('./modules/csv');
var BloodPressure = require('./models/BloodPressure');
var gSheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTalv-Sq749bFzZCZkmpEEYQxlqi2Zkb5O7qmImdWym2FvRXWeIS6UKwL1CYobfzvlsD8c4gxhI9yOg/pub?gid=1527499934&single=true&output=csv';
var csvHeaders = {
  BLOODPRESSURE: { headers: ['date','top','bottom','id','comment','MEMENTO_ID'] }
}

// get google sheet & export to data.csv
var file = fs.createWriteStream("./data/csv/bloodpressure.csv");
var request = http.get(gSheetUrl, function(response) {
  var stream = response.pipe(file);
  stream.on('finish', function() {
    console.log('downloaded bloodpressure.csv')

    // write csv data to mongo
    mongoose.connect('mongodb://localhost:27017/dashboard', {useNewUrlParser: true});
    var db = mongoose.connection;
    if (typeof db.collections['bloodpressure'] != 'undefined') {
      db.collections['bloodpressure'].drop(function(){
        csv.importFile('./data/csv/' + 'bloodpressure.csv', csvHeaders.BLOODPRESSURE.headers, 'BloodPressure');
      });
    } else {
      csv.importFile('./data/csv/' + 'bloodpressure.csv', csvHeaders.BLOODPRESSURE.headers, 'BloodPressure');
    }
  })
});
