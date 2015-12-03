var location = ["Saint Paul, MN", "Minnetonka, MN", "Maplewood, MN", "Owatonna, MN", "Transylvania, Romainia", "Edina, MN",
    "Sunnydale, CA", "Janestown, MN", "Space, MN", "Sunnydale, CA", "Minneapolis, MN", "Edina, MN", "Saint Paul, MN", "Bloomington, MN", "Edina, MN",
    "Anytown, MN", "Hinkley, MN", "Orono, MN", "Maplewood, MN", "Bloomington, MN"];

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var randomLocation = function () {
    return location[randomNumber(0, 19)];
};

module.exports = randomLocation;