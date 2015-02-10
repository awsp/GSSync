module.exports = {
  // App Configuration
  debug: true,
  mongo: {
    host: 'localhost',
    port: 27017,
    database: 'meteor',
    collection: 'your_collection_name',
  },
  dbSocket: function () {
    return 'mongodb://' + this.mongo.host + ':' + this.mongo.port + '/' + this.mongo.database;
  },
  prefix: '',


  // Spreadsheet
  spreadsheet: {
    spreadsheetId: '',
    spreadsheetName: '',
    worksheets: [
      {
        worksheetName: '',
        worksheetId: ''
      }
    ]
  },

  username: '',
  password: ''
};
