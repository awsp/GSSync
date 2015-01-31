module.exports = {
  // App Configuration
  debug: true,
  mongo: {
    host: 'localhost',
    port: '3001',
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
