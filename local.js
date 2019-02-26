'use strict';

const postToBuffer = require('./postToBuffer');
const getTrends = require('./getTrends');

async function start(){
  var trends = await getTrends();
  var bufferResponse = await postToBuffer(trends.news,trends.url);

  console.log('buffer final Response : ' + bufferResponse);
}

start();
