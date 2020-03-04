var data = require('../data.json');
const fs = require('fs');

exports.editEvent = function(req, res){
    let obj = {
        "time": req.query.time,
        "name": req.query.name,
        "date": req.query.StartDate + ", " + req.query.StartDateTime,
        "reward": req.query.reward,
        "consequence": req.query.consequence,
        "result": "upcoming"
    }

    let editIdx = req.query.idx;
    console.log(req.query);
    console.log(editIdx);

    data.sessions[editIdx] = obj;
    fs.writeFile('data.json',JSON.stringify(data),'utf8', function(err){
        if(err) {
            console.log('error writing to data.json... bruh');
            console.log(err);
        }
    })
    
    res.render('sessions',data);
}

exports.view = function(req, res) {
    let sessionIdx = findEvent(req.query.name, data.sessions);
    let session = data.sessions[sessionIdx];
    let startdate = session.date.split(', ');
    let obj = {
        'url': data.url,
        'name': session.name,
        'startdate': startdate[0],
        'starttime': startdate[1],
        'time': session.time,
        'reward': session.reward,
        'consequence': session.consequence,
        'idx': sessionIdx
    };

    res.render('editevent', obj);
}


function findEvent(name, array){
    for(var i = 0; i < array.length; i++){
        if(array[i].name === name){
            return i;
        }
    }
}