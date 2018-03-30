var stream = require("../models/twit").stream;
var twitReq = require("../models/twit").twitReq;

stream.on('tweet', function (tweet) {
    console.log(tweet);
});

T.get('search/tweets', { q: 'csgo', count: 100 }, function(err, data, response) {
    
});
