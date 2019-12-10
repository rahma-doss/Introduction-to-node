module.exports = function (dirname, ext, cb) {
    var fs = require('fs');
    var path = require('path');


    fs.readdir(dirname, function(err, list){
        if (err) {
            return cb(err);
        } else {
            for (i = 0; i < list.length; i++) {
                if (path.extname(list[i]) === ext) {
                    console.log(list[i]);
                }
            }
            //cb(null
        }
    });
}