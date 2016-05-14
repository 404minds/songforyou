
// var request = require('request');
// //var SoundCloudAPI = require("soundcloud-node");

// var routes = function (app) {
//   app.get('/search', function(req, res) {
//     request.get({ url: "https://api.soundcloud.com/tracks?client_id=3ab4e301c62aaa5f97bb9df16a52e624" }, function(error, response, body) { 
//       if (!error && response.statusCode === 200) { 
//           res.json(JSON.parse(body)); 
//          } 
//      }); 
//   });
// }

// module.exports = routes;

// Setup, please insert your data from your app at http://soundcloud.com/you/apps to make this example work 
var credentials = {
     client_id : '3ab4e301c62aaa5f97bb9df16a52e624',
     client_secret : '711ac0ce99b1273a50e399ce36d55790',
     username : 'user-971308082',
     password : 'rbansal07'
    };
 
SC = require('soundcloud-nodejs-api-wrapper');
var sc = new SC(credentials);
 
// this client object will be explained more later on 

var routes = function (app) {
  app.get('/search', function(req, res) {
    var client = sc.client();
 
		client.exchange_token(function(err, result) {
	 
	  var access_token = arguments[3].access_token;
	 
	  console.log('Full API auth response was:');
	  console.log(arguments);
	 
	  // we need to create a new client object which will use the access token now 
	  var clientnew = sc.client({access_token : access_token});
	 
	  clientnew.get('/tracks', { q: 'Pyar ke liye char pal kam nahi the',limit : 1}, function(err, result) {
	    if (err) console.error(err);
	    res.send("result" , result[0].permalink_url); 
	    // should show a json object of your soundcloud user 
	  });
	 
	  // lets try to create a new empty playlist 
	  // var jsonString = '{"playlist":{"title":"My brand "}}';
	  // clientnew.get('/playlist', jsonString , function(err, result) {
	  //   if (err) console.error(err);
	  //   console.log("result",result); // should show the json object of our new playlist 
	  // });
 
	});

  });
}

module.exports = routes;