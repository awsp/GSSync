/**
 * LHKanriApp Google Spreadsheet Sync
 * Obtain spreadsheet data and sync with MongoDB.
 *
 * Required Scopes:
 *   - https://spreadsheets.google.com/feeds
 *   - https://docs.google.com/feeds
 *   - https://www.googleapis.com/auth/drive.file
 *
 * Required NPM Packages:
 *   - edit-google-spreadsheet
 *   - mongodb
 *   - request
 *   - prompt
 *
 * @package com.ssetp.lhapp.spreadsheet_sync
 * @env bash shell
 * @author Anthony S. Wu
 * @organization S S Enterprise, Inc.
 * @version 1.0.0
 */


// Init
var fs         = require('fs');
var configPath = './spreadsheet_sync_config.js';
var GSSync     = require('./gssync.js');

// Load Configurations
if (fs.existsSync(configPath)) {
  var loginCredential = require(configPath);
  var gss = new GSSync(loginCredential);
  gss.init();
}
else {
  console.log('Please provide a spreadsheet_sync.js file for your personal credentials. ');
  process.exit();
}