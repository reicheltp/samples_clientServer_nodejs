var request = require('request');
var util = require('util');

var ENDPOINT = 'http://127.0.0.1:1963/api/values';

// Interval duration in ms and timeout in ms
var DURATION = 2000;
var TIMEOUT = 10000;
// number which identifies the client
var MAC = 12354654

// request sensors and measure some values
var getMeasurement = function() {
    var time = process.hrtime();
    return util.format('hrtime:%d', time[0]*1e9 + time[1]);
};

var timer = setInterval(function(){
    var measuredValue = getMeasurement();

    //create body
    var data = {
        cid: MAC,
        time: new Date(),
        content: measuredValue
    };

    //send request
    request.post(ENDPOINT, {json:data}, function(err, res, body){
        console.log(err ? err : res.statusCode);
    });
}, DURATION);

console.log('Start measure data');
setTimeout(function(){ clearInterval(timer);}, TIMEOUT);