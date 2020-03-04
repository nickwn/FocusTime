var data = require('../data.json');
var fs = require('fs');
exports.view = function(req, res){
    id = req.params.id;
    console.log(id);
    if(id != undefined && id != 'default'){
        data['url'] =
        "https://platform-lookaside.fbsbx.com/platform/profilepic/?"+id;
        fs.writeFile('data.json', JSON.stringify(data), function(e){
            if(e){throw e;}
        });
    } else if (id== 'default'){
        data['url'] = "../media/prof.jpg"
    }
    res.render('sessions', data);
}

exports.viewAlt = function(req, res){
    id = req.params.id;
    console.log(id);
    if(id != undefined && id != 'default'){
        data['url'] =
        "https://platform-lookaside.fbsbx.com/platform/profilepic/?"+id;
        fs.writeFile('data.json', JSON.stringify(data), function(e){
            if(e){throw e;}
        });
    } else if (id== 'default'){
        data['url'] = "../media/prof.jpg"
    }
    res.render('sessions-alt', data);
}
