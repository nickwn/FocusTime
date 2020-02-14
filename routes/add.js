var data = require('../data.json');

exports.addEvent = function(req, res){
    console.log(2)
    let obj = {
        "time": req.query.time,
        "name": req.query.name,
        "date": req.query.StartDate + ", " + req.query.StartDateTime,
        "reward": req.query.reward,
        "consequence": req.query.consequence
    }
    data.sessions.push(obj);
    console.log('3')
    res.render('sessions',data);
}