var twit = require("../models/twit");
var searchTerms = require('../lib/searchTerms');
var config = require('../lib/config'); //put the account details over here

bot = new twit(config);

var searchParams = { q: searchTerms, count: 100 }

bot.retweet(searchParams);
