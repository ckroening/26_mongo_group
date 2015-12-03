var names = ["Amanda Bausch", "Ashley Steele", "Charlotte Kroening", "Nick Gill", "Frank Furter", "Soma Lady", "Willow Rosenberg",
    "Jane Cobb", "River Tam", "Xander Harris", "Twighlight Sparkle", "Ronnie Reagan", "Sampson Bausch", "Joe Guy", "Gina Helroy", "Leroy Jenkins",
    "Jan Brown", "Bro Dude", "Anotha Chika", "Soma Guy"];

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var randomName = function () {
    return names[randomNumber(0, 19)];
};
module.exports = randomName;