var express = require('express');
var router = express.Router();
var request = require('request');
/* GET users listing. */
router.get('/', function(req, res, next) {
    request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          const objData = JSON.parse(body);
          res.render('users',{data: objData });
    });
});

module.exports = router;
