'use strict';

var Pets = require('../models/petModel');

var peStorage = function() {

    var getPets = function(callback) {

        Pets.find({ Name:{$ne:null}},function(err, commands) {

            if (err) return callback(err, null);

            callback(err, commands);

        });

    };

    return {
        getPets : getPets
    };

}();

module.exports = peStorage;