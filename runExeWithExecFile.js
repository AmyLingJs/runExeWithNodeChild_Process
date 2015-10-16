var execFile = require('child_process').execFile;
var fun = function() {
    execFile('phantomjs.exe', ['countdown.js'],{},function(err, data) {
        console.log(data.toString());
        console.log('The end!');
    });
}
fun();
