# GSSync
Google Spreadsheet Syncs to Meteor.js MongoDb

# How to use
- Navigate into folder, install all the dependencies.
```
$ npm install
```

- Copy `default_config.js` to a new file called `spreadsheet_sync_config.js`
```
$ cp default_config.js spreadsheet_sync_config.js
```

- Open spreadsheet_sync_config.js, 
  - Edit mongoDb related information. (Meteor default mongodb port at 3001 by default, if you choose to use port n, mongodb will usually be set to port n + 1)
  - Edit spreadsheet's name / ID as well as worksheets name / ID
  - **[Optional]** Edit Google username and password if you don't want to be prompted every time.

- Execute the following command along with meteor instance is up. 
```
node spreadsheet_sync.js
```
