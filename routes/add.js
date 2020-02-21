var data = require('../data.json');
const fs = require('fs');

exports.addEvent = function(req, res){
    var split = req.query.StartDate.split('/');
    var timeSplit = req.query.StartDateTime.substring(0, 5).split(':');
    var date = new Date(split[2], split[0] - 1, split[1], timeSplit[0], timeSplit[1]);
    console.log(date.toString());
    let obj = {
        "time": req.query.time,
        "name": req.query.name,
        "date": req.query.StartDate + ", " + req.query.StartDateTime,
        "dateString": date.toString(),
        "reward": req.query.reward,
        "consequence": req.query.consequence,
        "result": "upcoming"
    }
    data.sessions.push(obj);
    fs.writeFile('data.json',JSON.stringify(data),'utf8', function(err){
        if(err) {
            console.log('error writing to data.json... bruh');
            console.log(err);
        }
    })
    console.log(JSON.stringify(data));
    
    res.render('sessions',data);
}