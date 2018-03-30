var twit = require('twit');
var hashes = require('../lib/hashes');
var T = new twit(require('../lib/config')); //put the account details over here

var stream = T.stream('statuses/filter', { track: hashes , language: 'en' }) //put the required hashes in hashes.js

module.exports = {"stream":stream, "twitReq" : T};