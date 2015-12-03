var age = [19, 24, 45, 67, 12, 34, 89, 23, 22, 12, 69, 21, 44, 37, 34, 54, 12, 90, 36, 22];

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var randomAge = function () {
    return age[randomNumber(0, 19)];
};

module.exports = randomAge;