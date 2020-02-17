var data = require('../data.json');
const fs = require('fs');

exports.addEvent = function(req, res){

    let obj = {
        "time": req.query.time,
        "name": req.query.name,
        "date": req.query.StartDate + " " + req.query.StartDateTime,
        "reward": req.query.reward,
        "consequence": req.query.consequence
    }
    data.sessions.push(obj);
    fs.writeFile('../data.json',JSON.stringify(data),'utf8', function(err){
        console.log('error writing to data.json... bruh');
    })
    
    res.render('sessions',data);
}