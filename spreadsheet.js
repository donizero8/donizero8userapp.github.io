var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('158OoGIgDCeNl0QFOn5IBd49-S-P3o7Q9zwlYq5JgmKY');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.addRow(1, { last_name: 'Agnew', first_name: 'Samuel' }, function(err) {
    if(err) {
      console.log(err);
    }
  });
});
