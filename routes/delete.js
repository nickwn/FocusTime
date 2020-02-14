var data = require('../data.json');
const fs = require('fs');

exports.deleteEvent = function(req, res){
    var array = data.sessions;
    var index;
    var i = 0;
    while(i < array.length){
        if(array[i].name === req.query.name){
            index = i;
        }
        i++;
    }
    data.sessions.splice(index, index+1);
    var result = JSON.stringify(data);
    fs.writeFile("../data.json",result,'utf8', function(err){
        if(err){
            console.log('error writing to data.json... bruh');
        }
    })
    res.render('sessions',data);
}