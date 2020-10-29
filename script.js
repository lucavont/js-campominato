var randomNumList = [];
var generatedNum;
var userPickedNum = [];
var userNum;
var maxAttemptsEasy = 84;
var maxAttemptsInt = 64;
var maxAttemptsDifficult = 34;





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
    if (document.getElementById('difficulty').value === 'facile') {
        while (randomNumList.length < 16) {
            generatedNum = getRandomIntInclusive(1, 100)
            if (randomNumList.indexOf(generatedNum) === -1) {
                randomNumList.push(generatedNum)
            }
        }
    } else if (document.getElementById('difficulty').value === 'intermedio') {
        while (randomNumList.length < 16) {
            generatedNum = getRandomIntInclusive(1, 80)
            if (randomNumList.indexOf(generatedNum) === -1) {
                randomNumList.push(generatedNum)
            }
        }
    } else if (document.getElementById('difficulty').value === 'difficile') {
        while (randomNumList.length < 16) {
            generatedNum = getRandomIntInclusive(1, 50)
            if (randomNumList.indexOf(generatedNum) === -1) {
                randomNumList.push(generatedNum)
            }
        }
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