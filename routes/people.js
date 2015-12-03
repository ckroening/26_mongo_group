var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');
var age = require('../modules/age');
var location = require('../modules/location');
var name = require('../modules/name');
var sex = require('../modules/sex');
var twitter = require('../modules/twitter');

/*Get users */
console.log(name);
function newPerson(name, age, location, sex, twitter) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.sex = sex;
    this.twitter = twitter;
}

router.get('/', function(req, res, next){
    var peopleArray = [];
    for (var i = 0; i <= 20; i++){
        var person = new newPerson(name.randomName(), age.randomAge(), location.randomLocation(), sex.randomSex(), twitter.randomTwitter());
        peopleArray.push(person);
    }
        res.json(peopleArray);
    });

router.put('/name/:id', function(req, res, next) {
    var results = mongo.mongo_group.update({_id})
});


/**
 * Created by charlotte on 12/3/15.
 */
