var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: false,
            index: {
                unique: true
            }
        }
    });

    return mongoose.model('User', schema, 'users');
}
