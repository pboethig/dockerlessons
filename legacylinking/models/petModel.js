'use strict';

var mongoose        = require('mongoose'),
    Schema          = mongoose.Schema,
    ObjectId        = Schema.Types.ObjectId;

 


var petSchema = Schema({
    Name: { type: String, required: false },
    Species: { type: String, required: false},
    imageUrl: {type:String, required:false}
});

var petModel = mongoose.model('Pets', petSchema);

module.exports = petModel;