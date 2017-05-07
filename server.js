const express = require('express')  
const app = express()  
const port = 3000

//CL  vars
const cl_city = 'worcester'
const cl_searchTerm = 'jeep'

//Thanks to: https://www.npmjs.com/package/node-craigslist

//GET
app.get('/', (request, response) => {  
  var jsonStr = '[]';

  var
  craigslist = require('node-craigslist'),
  client = new craigslist.Client({
    city : cl_city
  }),
  options = {
    baseHost : '', // defaults to craigslist.org 
    category : 'cta', // defaults to sss (all) pta (auto parts), cta (cars and trucks), sya (computer stuff), tla (tools)
    city : '',
    maxAsk : '2000',
    minAsk : '100'
  };
client
  .search(options, cl_searchTerm)
  .then((listings) => {
    // play with listings here... 
    var obj = JSON.parse(jsonStr);

    listings.forEach((listing) => obj.push({listing}));
    jsonStr = obj;
    response.json([jsonStr]);

  })
  .catch((err) => {
    console.error(err);
  });
  
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
var
  craigslist = require('node-craigslist'),
  client = new craigslist.Client({
    city : cl_city
  });
 
client
  .search(cl_searchTerm)
  .then((listings) => {
    // play with listings here... 
    listings.forEach((listing) => console.log(listing));
  })
  .catch((err) => {
    console.error(err);
  });
  console.log(`server is listening on ${port}`)
})