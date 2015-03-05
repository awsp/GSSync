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

- [Optional] In case, you don't want your config be recorded in Git source controls
  PS: Execute in remote
```
$ git update-index --assume-unchanged spreadsheet_sync_config.js
```


- Open spreadsheet_sync.js and enter your Google information, MongoDb's related information, username and password if you don't want to be prompted every time.

- Run
```
node spreadsheet_sync.js
```
