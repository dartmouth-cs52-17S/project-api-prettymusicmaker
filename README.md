# PrettyMusicMaker: Backend


* See the [README.md](https://github.com/dartmouth-cs52-17S/project-client-prettymusicmaker/blob/master/README.md) in the [Frontend repo](https://github.com/dartmouth-cs52-17S/project-client-prettymusicmaker) for more information relating to this project

* Visit [PrettyMusicMaker.io](http://PrettyMusicMaker.io) for some <b>FUN</b>!

## Data Models
### Music
Music model schema looks as follows
```
{
  title: String,
  author: String,
  music: [[], [], [], [], [], [], [], [], [], [], [], []],
  bass: [],
  snare: [],
  hh: [],
  tempo: Number,
  synth: Number,
}
```
### User
User model schema looks as follows
```
{
  email: { type: String, unique: true, lowercase: true },
  password: String,
  username: String,
}
```


## AUTH & API endpoints

In order to authenticate users to the API, you will need to provide a token that includes information about the user, such as their id, email, etc. You should include the token in your requests whenever it is available, as it is the only way the API knows a user is logged in and can authorize requests to view, modify, or delete restricted content.

### Signup and Signin

```
# try to signup
curl -X POST -H "Content-Type: application/json" -d '{"email": "test@test.com","password": "password"}' "http://localhost:9090/api/signup"

# then try to signin
curl -X POST -H "Content-Type: application/json" -d '{"email": "test@test.com","password": "password"}' "http://localhost:9090/api/signin"
```

### Endpoints that require authentication

Include the user token in your header for every request you make; for instance, to make an authenticated request to music API endpoint, you might do

```
# authenticated request to an API endpoint
curl -H "Authorization: <TOKEN>" "http://127.0.0.1:9090/api/music"

# authenticated request to create a new music
curl -X POST -H "Content-Type: application/json" -H "Authorization: <TOKEN>" -d '{"title": "music1","author": "some author","music": <10x12 ARRAY OF BOOL>, "bass": <1x12 ARRAY OF BOOL>, "snare": <1x12 ARRAY OF BOOL>, "hh": <1x12 ARRAY OF BOOL>}' "http://localhost:9090/api/music"

# authenticated request to delete a specific music with <MUSIC_ID>
curl -X DELETE -H "Content-Type: application/json" -H "Authorization: <TOKEN>" "http://localhost:9090/api/music/<MUSIC_ID>"

# authenticated request to update a specific music with <MUSIC_ID>
curl -X PUT -H "Content-Type: application/json" -H "Authorization: <TOKEN>" -d '{"title": "CHANGE"}' "http://127.0.0.1:9090/api/music/<MUSIC_ID>
```

### Endpoints that do not require authentication
```
# retrieve a specific music with <MUSIC_ID>
curl -X GET "http://localhost:9090/api/music/<MUSIC_ID>"
```

## Authors

SeokJun Bing,
Ke Deng,
Van Nguyen,
Ödön Örzsik,
Dylan Scandinaro

## Acknowledgments
* This project was inspired by [this app](https://musiclab.chromeexperiments.com/Melody-Maker).
