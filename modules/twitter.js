var twitterHandle = ["@manadab", "none", "@gill28", "@furter", "@ladyGal", "@tempertemper", "@livinglegend", "@bigbrain",
    "@scoobie1", "@ponygirl", "@Deadpres", "@pickle", "@JGthefirst", "@HelGina", "@Igotthis", "@janB", "@broMan", "@anothaChika",
    "@ladGuy"];

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var randomTwitter = function () {
    return twitterHandle[randomNumber(0, 19)];
};

module.exports = randomTwitter;
