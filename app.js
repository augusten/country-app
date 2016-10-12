// var getCountry = require( __dirname + '/get_country')

var gettld = require(__dirname + "/get_coutry")

console.log( gettld( process.argv[2] ) )

// var fs = require('fs')

// var countryRead = fs.readFile(__dirname + "/countries.json", 'utf8', function(err, data) {
// 	if (err) {
// 		console.log(err)
// 		throw err
// 	}
// 	console.log(JSON.parse(data))
// })

// console.log(typeof(countryRead)[0])

// console.log( JSON.parse( countryRead ))