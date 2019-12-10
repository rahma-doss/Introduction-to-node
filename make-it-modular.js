var fmod = require('./mymodular.js');

fmod(process.argv[2], "."+process.argv[3], function(err, list){
    if (err) {
        console.log('Error: '+ err)
    } else {
        for (i = 0; i < list.length; i++) {
            return list[i];
        }
    }
});