var randomNumList = [];
var generatedNum;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

var i = 0;

while (i <= 15) {
    randomNumList.push(getRandomIntInclusive(1, 100))
    i++;
}

console.log(randomNumList)