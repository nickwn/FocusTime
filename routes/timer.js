var data = require('../data.json');

exports.view = function(req, res){
    var time = req.params.time;
    console.log(time);
    data["started"] == true;
    res.render('../finished', time);

}
