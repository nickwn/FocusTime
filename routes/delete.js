var data = require('../data.json');

exports.deleteEvent = function(req, res){
    var array = data.sessions;
    var index;
    var i = 0;
    while(i < array.length){
        if(array[i] == req.query.name){
            index = i;
        }
    }
    delete data.sessions[i];
    res.render('sessions',data);
}