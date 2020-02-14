var data = require('../data.json');

exports.deleteEvent = function(req, res){
    var array = data.sessions;
    var index;
    var i = 0;
    while(i < array.length){
        console.log(array[i].name + ':::' + req.query.name);
        if(array[i].name === req.query.name){
            index = i;
        }
        i++;
    }
    data.sessions.splice(index, index+1);
    res.render('sessions',data);
}