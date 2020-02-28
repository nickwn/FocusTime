var data = require('../data.json');
const fs = require('fs');
exports.view = function(req, res){
    console.log(req.query.result);
    var i = findEvent(req.query.name, data.sessions);
    data.sessions[i].result = req.query.result;

    fs.writeFile('data.json',JSON.stringify(data),'utf8', function(err){
        if(err) {
            console.log('error writing to data.json... bruh');
            console.log(err);
        }
    })


    var succeeded = data.sessions[i].result === 'succeeded';
    var info = {
        'url': data.url,
        'success': succeeded
    };
    res.render('finished', info);
}


function findEvent(name, array){
    for(var i = 0; i < array.length; i++){
        if(array[i].name === name){
            return i;
        }
    }
}