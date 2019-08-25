require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var axios = require("axios");

var fs = require("fs");

var moment = require("moment");




var parameter = process.argv[2];
var searchArgs = process.argv;
var search = "";

// for loop
for (var i = 3; i < searchArgs.length; i++) {
    if (i > 3 && i < searchArgs.length) {
        search = search + "+" + searchArgs[i];
    } else {
        search += searchArgs[i];
    }
}

function runLiri(parameter, search) {
    switch (parameter) {
        case "concert-this":
           concertThis(search);
           break;

        case "spotify-this-song":
           spotifyThis(search);
           break;

        case "movie-this":
           movieThis(search);
           break;   

        case "do-what-it-says":
           doWhatItSays();
           break;   

    }
};

function concertThis(search) {
    var concertQueryURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"
    axios.get(concertQueryURL).then(
      function(response) {
        for (var j = 0; j < 10; j++) {
          console.log("--------------------------------------------------------------------------------");
          console.log("Venue: " + response.data[j].venue.name);
          console.log("Location: " + response.data[j].venue.city + ", " + response.data[j].venue.country);
          console.log("Date: " + moment(response.data[j].datetime).format("MM/DD/YYYY"));
        }
      })
      .catch(function(error) {
        if (error.response) {

          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
        
          console.log(error.request);
        } else {
       
          console.log("Error", error.message);
        }
        console.log(error.config);
    });
  }

  function spotifyThis(search) {
    var spotify = new Spotify(keys.spotify);
    if (!search) {
      search = "The Sign";
    }
      spotify.search({type: "track", query: search}, function(error, data) {
        var results = data.tracks.items;
        if (error) {
          console.log("Oops, an error occured.");
        }
          for (var k = 0; k < 5; k++) {
          console.log("--------------------------------------------------------------------------------");
          console.log("Artist: " + results[k].artists[0].name);
          console.log("Song: " + results[k].name);
          console.log("Preview: " + results[k].preview_url);
          console.log("Album: " + results[k].album.name);
        }
      })
  }

  function movieThis(search) {
    var movieQueryURL = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    axios.get(movieQueryURL).then(
      function(response) {
        if (response.data.Response === "False") {
          console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
          console.log("It's on Netflix!");
        } else {
          console.log("--------------------------------------------------------------------------------");
          console.log("Title: " + response.data.Title);
          console.log("Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.imdbRating);
          console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
          console.log("--------------------------------------------------------------------------------");
        }
      })
      .catch(function(error) {
        if (error.response) {

          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
     
          console.log(error.request);
        } else {
         
          console.log("Error", error.message);
        }
        console.log(error.config);
    });
  }

  function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
      if (error) {
        return console.log(error);
      }
      var dataArr = data.split(',');

      runLiri(dataArr[0], dataArr[1].replace(/['"]+/g, ''));
    });
  }  

runLiri(parameter, search);




