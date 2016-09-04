'use strict';
var mongoose = require('mongoose');

var database = function () {
    var conn = null,

        init = function (config) {
            console.log('Trying to connect to ' + config.host + '/' + config.database + ' MongoDB database');
            var options = {
                server: {},
                replset: {}
            };

            if (config.username && config.password) {           
                options.user = config.username;
                options.pass = config.password;
            }
            
            options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };
            
            mongoose.connect('mongodb://' + config.host + '/' + config.database, options);
            
            var db = mongoose.connection;
            var lastReconnectAttempt; //saves the timestamp of the last reconnect attempt
            
            db.on('error', function(error) 
            {
                console.error('Error in MongoDb connection: ' + error);
                mongoose.disconnect();
            });

            db.on('disconnected', function() {
                console.log('MongoDB disconnected!');
                var now = new Date().getTime();
                // check if the last reconnection attempt was too early
                if (lastReconnectAttempt && now-lastReconnectAttempt<5000) {
                    // if it does, delay the next attempt
                    var delay = 5000-(now-lastReconnectAttempt);
                    console.log('reconnecting to MongoDB in ' + delay + "mills");
                    setTimeout(function() {
                        console.log('reconnecting to MongoDB');
                        lastReconnectAttempt=new Date().getTime();
                        mongoose.connect('mongodb://' + config.host + '/' + config.database, options);
                    },delay);
                }
                else {
                    console.log('reconnecting to MongoDB');
                    lastReconnectAttempt=now;
                    mongoose.connect('mongodb://' + config.host + '/' + config.database, options);
                }
            });    

         return db;

        },

        close = function() {
            if (conn) {
                conn.close(function () {
                    console.log('Mongoose default connection disconnected through app termination');
                    process.exit(0);
                });
            }
        }

    return {
        init:  init,
        close: close
    };

}();

module.exports = database;
