var dotenv = require('dotenv');
dotenv.load();

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser());

var http = require('http');
var port = (process.env.PORT || 8111);

var _ = require('lodash');

var Router = require('routes'),
router = Router();

var teams = [
    'lagalaxy.com/players/',
    'realsaltlake.com/players/',
    'timbers.com/players/'
]

var jade = require('jade');
app.set('views', __dirname + '/templates')
app.set('view engine', 'jade')
app.get('/', function (req, res) {
    res.render(
        'index',
        { title : 'Home' }
    )
});

app.get('/search', function(req, res) {
    var player = 'luis-gil';
    var results = [];
    _.each(teams, function(team){
        results.push(team + player);
    });
    res.render(
        'search',
        { results: results, player: player }
    )
})
app.listen(3000);

console.log('HTTP server listening on port: ' + port );
