var data = require('../data.json');
const fs = require('fs');
exports.view = function(req, res){
    console.log(req.query.result);
    var i = findEvent(req.query.name, data.sessions);
    data.sessions[i].result = req.query.result;

    // var str = data.sessions[i].date;
    // var split = str.substring(0,10).split('/');
    // var timeSplit = data.sessions[i].date.substring(12).split(':');
    // var myDate = new Date(2020, split[0] - 1, split[1], timeSplit[0], timeSplit[1].substring(0,2));
    
    // if(split[0] == 2 && split[1] + 7 > 29){
    //     var num = (split[1] + 7) % 29;
    //     myDate = myDate.setMonth(2, num);
    // } else if(split[1] + 7 > 31){
    //     var num = (split[1] + 7) % 31;
    //     myDate = myDate.setMonth(myDate.getMonth()+1, num);
    // }
    
    //console.log((myDate.getMonth()+1)+'/'+myDate.getDate()+'/'+myDate.getFullYear());
    var succeeded = data.sessions[i].result === 'succeeded';
    var info = {
        'url': data.url,
        'success': succeeded,
        'name' : req.query.name
        // 'session' : data.sessions[i],
        // 'startDate' : date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear(),
        // 'startTime' : data.sessions[i].date.substring(12)
    };

    // fs.writeFile('data.json',JSON.stringify(data),'utf8', function(err){
    //     if(err) {
    //         console.log('error writing to data.json... bruh');
    //         console.log(err);
    //     }
    // })

    res.render('finished', info);
}


function findEvent(name, array){
    for(var i = 0; i < array.length; i++){
        if(array[i].name === name){
            return i;
        }
    }
}