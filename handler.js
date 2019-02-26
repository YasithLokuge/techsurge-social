'use strict';

const getTrends = require('./getTrends');
const postToBuffer = require('./postToBuffer');

module.exports.publish = async (event, context) => {

  var trends = await getTrends();
  var bufferResponse = await postToBuffer(trends.news,trends.url);

  console.log('buffer final Response : ' + bufferResponse);

  return {
    statusCode: 200,
    body: {
      message: {
        bufferResponse: bufferResponse,
        news: trends.news,
        url: trends.url
      },
      input: event
    }
  };
};
