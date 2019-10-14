LIRI Node App

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data. 
User will need to run several commands in the terminal or gitbash by navigating to the root folder where the file titled “liri.js” is saved.
Liri uses the following commands:
•	User types in terminal/gitbash “node liri concert-this <name of concert>” to search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
1.	Name of the venue
2.	Venue location
3.	Date of the Event (use moment to format this as "MM/DD/YYYY")
 
•	User types into terminal/gitbash the command “node liri spotify-this-song <name of song”> to search song and will show the following information about the song in your terminal/bash window
1.	Artist(s)
2.	The song's name
3.	A preview link of the song from Spotify
4.	The album that the song is from 
 
•	User types into terminal/gitbash the command “node liri movie-this <name of movie>” to search “movie-this” which will show the following in your terminal/bash window
1.	Title of the movie.
2.	Year the movie came out.
3.	MDB Rating of the movie.
4.	Rotten Tomatoes Rating of the movie.
5.	Country where the movie was produced.
6.	Language of the movie.
7.	Plot of the movie.
8.	Actors in the movie.
 
### Screenshot
##### Homepage
![Screenshot of home page](https://github.com/obygirl81/liri-node-app/blob/master/screenshots/Screen%20Shot%202019-08-24%20at%209.55.50%20AM.png)

•	User types into terminal/gitbash the command “node liri do what it says” and the app will display the random.txt file
The following are technology used:
•	Node.js
•	Javascript
•	Npm packages: axios, node-spotify-API, moment, DotEnv
•	Git
•	GitHub
•	APIs – Bands in Town and OMDB
 
NOTE: If no song is provided then your program will default to "The Sign" by Ace of Base and If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'




