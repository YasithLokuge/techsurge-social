'use strict';

const googleTrends = require('google-trends-api');
const decode = require('unescape');

module.exports = function () {
    // Return new promise
    return new Promise(function(resolve, reject) {
     // Do async job
       googleTrends.realTimeTrends({
           geo: 'US',
           category: 't',
       }, function(err, results) {
           if (err) {
             console.log("error trends request :" + err);
             reject(error);
           } else {
             var jsonResult = JSON.parse(results);
             var storiesLength = jsonResult.storySummaries.trendingStories.length;
             var randomIndex = getRandomIndex(storiesLength);
             var message = decode(jsonResult.storySummaries.trendingStories[randomIndex].articles[0].articleTitle);
             console.log(message);
             var link = jsonResult.storySummaries.trendingStories[randomIndex].articles[0].url;
             console.log(link);
             resolve({ url: link, news: message });
           }
       });
    })
}

function getRandomIndex(limit) {
  return Math.floor(Math.random() * limit);
}
