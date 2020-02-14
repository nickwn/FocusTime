var data = require('../data.json');

exports.view = function(req, res){
    res.sendfile("calendar.html");
}