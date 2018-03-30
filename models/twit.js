//bot class
var Twit = require('twit');

var bot = module.exports = function(config) { 
  this.twit = new Twit(config);
};;

bot.prototype.retweet = function (params) {
  var self = this;  //because this gets changed sometimes
  this.twit.get('search/tweets', params, function (err, reply) {
    if(err) console.log(err);
    var tweets = reply.statuses;
    var randomTweet = randIndex(tweets);
    console.log(randomTweet,"is not tweeted");
 	if(typeof randomTweet != 'undefined')
	    self.twit.post('statuses/retweet/:id', { id: randomTweet.id_str },);
  });
};

function randIndex (arr) {
  var max = -1;
  for(i = 0; i < arr.length; i++){
      tweet  = arr[i];
      console.log(tweet);
      if("retweet_count" in tweet){
          if(tweet.retweet_count > max)
              max = i;
      }
  }
  return arr[max];
};
