'use strict';

var petModel = require('../models/petModel');

var dataInitializer = function () {

    var initializeData = function(callback) {
           
                var pet1 = new petModel({
                Name             : 'Splitz',
                Species         : 'Shiba Inu',
                imageUrl        : 'http://dog-breeds.thepetrepublic.com/images/Breeds/Shiba-Inu/Shiba-Inu-large.jpg'
                });
                           

                var pet2 = new petModel({
                Name             : 'Taco',
                Species         : 'Affenpinscher',
                imageUrl        : 'http://dog-breeds.thepetrepublic.com/images/Breeds/Affenpinscher/Affenpinscher-large.jpg'
                });
                               
                var pet3 = new petModel({
                Name             : 'Hairy',
                Species         : 'American Hairless Terrier',
                imageUrl        : 'http://dog-breeds.thepetrepublic.com/images/Breeds/American-Hairless-Terrier/American-Hairless-Terrier-large.jpg'
                });

                 var pet1a = new petModel({
                Name             : 'Splitz',
                Species         : 'Shiba Inu',
                imageUrl        : 'http://dog-breeds.thepetrepublic.com/images/Breeds/Shiba-Inu/Shiba-Inu-large.jpg'
                });
                           

                var pet2a = new petModel({
                Name             : 'Taco',
                Species         : 'Affenpinscher',
                imageUrl        : 'http://dog-breeds.thepetrepublic.com/images/Breeds/Affenpinscher/Affenpinscher-large.jpg'
                });
                               
                var pet3a= new petModel({
                Name             : 'Hairy',
                Species         : 'American Hairless Terrier',
                imageUrl        : 'http://dog-breeds.thepetrepublic.com/images/Breeds/American-Hairless-Terrier/American-Hairless-Terrier-large.jpg'
                });

                

                savePet(pet1);
                savePet(pet2);
                savePet(pet3);
                savePet(pet1a);
                savePet(pet2a);
                savePet(pet3a);
                
                
            
        };

        

    return {
        initializeData: initializeData
    };

    function savePet(pet){
        pet.save(function(err) {
                 if (err) {
                    console.log(err);                     
                 }
             });
    }

}();

module.exports = dataInitializer;