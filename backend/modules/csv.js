// csv to mongo module from https://stackoverflow.com/posts/30471839/revisions
var mongoose = require('mongoose');
var csv = require('fast-csv');

module.exports.importFile = function(filePath, fileHeaders, modelName) {
    var csvData = [];
    csv
        .fromPath(filePath, {headers: fileHeaders})
        .on('data', function(data) {

            var Obj = mongoose.model(modelName);
            var obj = new Obj();
            Object.keys(data).forEach(function(key) {

                var val = data[key];
                if (val !== '') {
                    obj.set(key, val);
                }
            });

            if (data.date != 'date') { // dont save row if it's the header
              csvData.push(obj);
            }
        })
        .on('end', function() {
          res = [];
          csvData.forEach(function (item) {
              item.save(function (err) {
                  res.push(err);
                  if (res.length === csvData.length) {
                      console.log('saved data to mongo')
                      process.exit()
                  }
              });
          });

        });
}
