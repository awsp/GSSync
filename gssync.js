var Spreadsheet = require('edit-google-spreadsheet');
var MongoClient = require('mongodb').MongoClient;
var prompt      = require('prompt');
var dbSocket    = null;

var GSSync = function (aConfig) {
  this.config = null;

  if (aConfig) {
    this.config = aConfig;

    // Modules
    dbSocket = this.config.dbSocket();
  }
  else {
    console.log('Configuration is not provided. ');
    process.exit();
  }
};


GSSync.prototype.getCollection = function () {
  return this.config.prefix + this.config.mongo.collection.replace(/-/g, '');
};

GSSync.prototype.doSpreadsheet = function () {

  var loginCredential = this.config;
  var spreadsheet = loginCredential.spreadsheet;

  spreadsheet.worksheets.forEach(function (worksheet) {

    Spreadsheet.load({
      debug: loginCredential.debug,
      spreadsheetId: spreadsheet.spreadsheetId ? spreadsheet.spreadsheetId : null,
      spreadsheetName: spreadsheet.spreadsheetName ? spreadsheet.spreadsheetName : null,
      worksheetName: worksheet.worksheetName ? worksheet.worksheetName : null,
      username: loginCredential.username ? loginCredential.username : null,
      password: loginCredential.password ? loginCredential.password : null
    }, function sheetReady(err, spreadsheet) {
      if (err) {
        console.log(err);
        return ;
      }

      spreadsheet.receive(function (err, rows, info) {
        MongoClient.connect(dbSocket, function (err, db) {
          if (err) {
            console.log(err);
            process.exit(1);
          }

          var collection = db.collection(loginCredential.mongo.collection);
          var batch = collection.initializeUnorderedBulkOp();

          for (var i in rows) {
            batch.insert(rows[i]);
          }

          batch.execute(function (err, result) {
            console.log('Done. ');
            process.exit();
          });

        });
      });

    });

  });

};

GSSync.prototype.init = function () {
  var self = this;

  if (self.config.username === '' || self.config.password === '') {

    // Ask for input
    var prompt = require('prompt');

    var properties = [
      {
        name: 'username'
      },
      {
        name: 'password',
        hidden: true
      }
    ];

    prompt.start();

    prompt.get(properties, function (err, userInput) {
      self.config.username = userInput.username;
      self.config.password = userInput.password;

      self.doSpreadsheet();
    });
  }
  else {
    self.doSpreadsheet();
  }

};

module.exports = GSSync;