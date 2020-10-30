var randomNumList = [];
var generatedNum;
var userPickedNum = [];
var userNum;
var maxRange = 100;
var maxAttempts = maxRange - 16;
var difficulty = (document.getElementById('difficulty')).value;




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

    switch (difficulty) {
        case "facile":
            maxRange = 100;
            break;
        case "intermedio":
            maxRange = 80;
            break;
        case "difficile":
            maxRange = 50;
            break;
    }



    while (randomNumList.length < 16) {
        generatedNum = getRandomIntInclusive(1, maxRange)
        if (randomNumList.indexOf(generatedNum) === -1) {
            randomNumList.push(generatedNum);
        }
    }
    while (!hasWon && isAlive) {
        userNum = parseInt(prompt('Inserisci un numero'));
        if (randomNumList.includes(userNum)) {
            alert('Oh no, il numero è già presente! Hai perso. Hai fatto ' + (userPickedNum.length + 1) + " round. I tuoi numeri: " + userPickedNum)
            isAlive = false;
        } else if (userPickedNum.includes(userNum)) {
            alert('Numero già inserito, riprova!')
        } else {
            userPickedNum.push(userNum)
        }
        if (userPickedNum.length > maxAttempts) {
            alert('HAI VINTO! Hai fatto ' + userPickedNum.length + " round. I tuoi numeri: " + userPickedNum)
            hasWon = true;
        }
    }
})