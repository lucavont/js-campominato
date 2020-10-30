var randomNumList = [];
var generatedNum;
var userPickedNum = [];
var userNum;
var maxAttemptsEasy = 84;
var maxAttemptsInt = 64;
var maxAttemptsDifficult = 34;
var maxBombEasy = 100;
var maxBombInt = 80;
var maxBombDifficult = 50;
var difficulty = (document.getElementById('difficulty'))




randomNumList.sort(function compare(a, b) {
    return a > b;
});


// console.log(randomNumList)
// console.log(userNum)
// console.log(userPickedNum)

var isAlive = true;
var hasWon = false;
// console.log(hasWon, isAlive)


document.getElementById('play-btn').addEventListener('click', function() {

    while (randomNumList.length < 16) {
        if (difficulty.value === 'facile') {
            generatedNum = getRandomIntInclusive(1, maxBombEasy)
        } else if (difficulty.value === 'intermedio') {
            generatedNum = getRandomIntInclusive(1, maxBombInt)
        } else if (difficulty.value === 'difficile') {
            generatedNum = getRandomIntInclusive(1, maxBombDifficult);
        }
        (randomNumList.indexOf(generatedNum) === -1)
        randomNumList.push(generatedNum);

    }
    while (!hasWon && isAlive) {
        userNum = parseInt(prompt('Inserisci un numero'));
        if (randomNumList.includes(userNum)) {
            alert('Oh no, il numero è già presente! Hai perso. Hai fatto ' + (userPickedNum.length + 1) + " round. I tuoi numeri: " + userPickedNum)
            isAlive = false;
        } else {
            userPickedNum.push(userNum)
        }
        if (userPickedNum.length > maxAttemptsEasy) {
            alert('HAI VINTO! Hai fatto ' + userPickedNum.length + " round. I tuoi numeri: " + userPickedNum)
            hasWon = true;
        }
    }
})