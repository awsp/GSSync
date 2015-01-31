# GSSync
Google Spreadsheet Syncs to Meteor.js MongoDb

# How to use
- Navigate into folder
```
$ npm install
```

- Copy `default_config.js` to a new file called `spreadsheet_sync_config.js`
```
$ cp default_config.js spreadsheet_sync.js
```

- Open spreadsheet_sync.js and enter your Google information, MongoDb's related information, username and password if you don't want to be prompted every time.

- Run
```
node spreadsheet_sync.js
```