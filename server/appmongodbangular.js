'use strict';
/*
    to make this js file work, you need to run:
    npm install --save-dev express path body-parser connect http errorhandler mongoose method-override serve-static
*/

var applicationRoot = __dirname,
    express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	connect = require('connect'),
	http = require('http'),
	errorhandler = require('errorhandler'),
    mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost/webAppNode';
var db = mongoose.connect(databaseUrl);
var app = express();

// Config
app.use(connect());
app.use(require('method-override')());
app.use(errorhandler());
app.use(require('serve-static')(path.join(applicationRoot, 'public')));
app.use(bodyParser());
//app.use(express.static(path.join(applicationRoot, 'public')));
app.use(errorhandler({ dumpExceptions: true, showStack: true }));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
   console.log('connection created !!!');
});

app.get('/api', function (req, res) {
	res.send('Ecomm API is running');
});


var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username:String,
    password: String,
    email: String
});
var User = mongoose.model('users', userSchema);


app.get('/api/users', function (req, res) {
	res.header('Access-Control-Allow-Methods', 'GET, POST');
	User.find('', function(err, users) {
		if( err || !users) {
			console.log('No users found');
            res.end();
        }
	  	else {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end( JSON.stringify(users));
		}
	  });
});

app.post('/api/login', function (req, res){
    console.log('POST: ');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    console.log(req.body);
    var jsonData = req.body.user;
      console.log(jsonData.name);
      console.log(jsonData.password);

    if(jsonData.name){
        User.findOne({'username':jsonData.name, 'password':jsonData.password}, function(err, user){
            if(user){
                console.log('we have found one:'+user);
                res.end(JSON.stringify(user));
            } else {
                res.end('no match found for this user:'+user);
            }
        });
    }

});

app.post('/api/user', function (req, res){
	console.log('POST: ');
	res.header('Access-Control-Allow-Methods', 'GET, POST');
	console.log(req.body);
	console.log(req.body.mydata);
	var jsonData = JSON.parse(req.body.mydata);
	  console.log(jsonData.username);
	  console.log(jsonData.password);
	  console.log(jsonData .email);

    var newUser = new User({firstname:jsonData.firstname, lastname:jsonData.lastname,
            email:jsonData.email, username:jsonData.username, password:jsonData.password});
    newUser.save(function(err, user){
        if (err) return console.error(err);
        else res.end( 'User saved');
    });

});

app.get('/api/user/:username', function (req, res){
    console.log('PUT: ');
    res.header('Access-Control-Allow-Methods', 'GET');
    var username = req.param('username');
    console.log(username);
    if(username){
        User.findOne({'username':username}, function(err, user){
            if(user){
                console.log('we have found one:'+user);
                res.end(user.toString());
            } else {
                res.end('no match found for this user:'+username);
            }
        });
    }
});

app.put('/api/user/:username', function (req, res){
    console.log('PUT: ');
    res.header('Access-Control-Allow-Methods', 'PUT');
    console.log(req.body);
    console.log(req.body.mydata);
    var jsonData = JSON.parse(req.body.mydata);
    var username = req.param('username');
    console.log(username);
    var userUpdate = {};
    if(jsonData.firstname) userUpdate.firstname = jsonData.firstname;
    if(jsonData.email) userUpdate.email = jsonData.email;
    if(jsonData.lastname) userUpdate.lastname= jsonData.lastname;
    if(jsonData.password) userUpdate.password = jsonData.password;
    if(username){
        User.findOneAndUpdate({'username':username}, userUpdate, function(err, user){
          if(user){
              console.log('we have found one:'+user);
              res.end('user '+username+' updated');
          } else {
              res.end('no match found for this user:'+username);
          }
        });
    }
});

app.delete('/api/user/:username', function (req, res){
    console.log('DELETE: ');
    res.header('Access-Control-Allow-Methods', 'PUT');
    var username = req.param('username');
    console.log(username);
    if(username){
        User.findOne({'username':username}, function(err, user){
            if(user){
                user.remove(function(err, user){
                    res.end('user '+username + ' deleted');
                });
            } else {
                res.end('no match found for this user:'+username);
            }
        });
    }
});

var server = http.createServer(app);
server.listen(1212, '0.0.0.0');
console.log('Server running at http://127.0.0.1:1212/');
