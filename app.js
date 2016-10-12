// Add required library and module
var fs = require("fs")
var parseData = require(__dirname + "/json-file-reader")

// the below code prints out the name of the country and its
// top level domain from the countries.json file
parseData( "countries.json", function ( data ) {
	for ( i = 0; i < data.length; i++ ) {
		for ( key in data[i]) {
			if ( data[i][key] === process.argv[2] ) {
				console.log(key + ": " + process.argv[2] + "\nTop Level Domain: " + data[i]["topLevelDomain"])
			}
		}
	}
})

// ANOTHER WAY TO DO THE SAME

/* var runThis = function ( country ) {
* 	parseData( "countries.json", function ( data ) {
* 		takeCountry( data )
* 	}, country )
* }

* var takeCountry = function ( ddata ) {
* 	// var theData = ddata
* 	for ( i = 0; i < ddata.length; i++ ) {

* 		for ( key in ddata[i]) {
* 			if ( ddata[i][key] === process.argv[2] ) {
* 				console.log(key + ": " + process.argv[2] + "\nTop Level Domain: " + ddata[i]["topLevelDomain"])
* 			}
* 		}
* 	}
* }

* runThis (process.argv[2])
*/