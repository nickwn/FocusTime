var data = require('../data.json');
var fs = require('fs');
exports.view = function(req, res){
    id = req.params.id;
    if(id != undefined){
        data['url'] = 
        "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid="+id+"&width=480&ext=1584918769&hash=AeSH5_oDgf7vOXxz";
        fs.writeFile('../data.json', JSON.stringify(data), function(e){
            if(e){throw e;}
        });    
    }
    res.render('sessions', data);
}