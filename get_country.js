var fs = require("fs")

// var countryRead = fs.readFile(__dirname + "/countries.json", 'utf8', function(err, data) {
// 	if (err) {
// 		console.log(err)
// 		throw err
// 	}
// 	// console.log(typeof(JSON.parse(data)))
// 	takeCountry ( data )
// })

var takeCountry = function ( ddata, ccountry ) {
	var theData = ddata
	// console.log(theData)
	for ( i = 0; i < 1; i++ ) { //theData.length
		// console.log(theData[i])
	// }
		for ( key in theData[i]) {
			// console.log( typeof(key) )
			// console.log ( theData[i][key] )
			// console.log ( theData[i].key )
			if ( theData[i][key] === ccountry ) {
				console.log ( "hello" )
			// }
		}
	}
}

				// return (ccountry + ": Top Level Domain" + theData[i]["topLevelDomain"])
}

var findTLD = function ( country ) {
	// needs to return information about country

	// reads the file
	var countryRead = fs.readFile(__dirname + "/countries.json", 'utf8', function(err, data) {
		if (err) {
			console.log(err)
			throw err
		}
	// console.log(typeof(JSON.parse(data)))
	takeCountry ( JSON.parse(data), country )
	})
	
}

module.exports = findTLD