function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var pcNumbers = [];
var userNumbers = [];

while (pcNumbers.length < 5) {
    var num = randomNumber(1, 100);
    if (!pcNumbers.includes(num)) {
        pcNumbers.push(num)
    }
};

document.addEventListener('DOMContentLoaded', function() {
    
    alert(pcNumbers)

    setTimeout(function () {
        while (userNumbers.length < 5) {
            var userNum = parseInt(prompt('inserisci un numero da 1 a 100'))
            if (isNaN(userNum) || userNum < 1 || userNum > 100) {
                alert('inserisci un numero corretto')
            } else {
                if (!userNumbers.includes(userNum)) {
                    userNumbers.push(userNum)
                } else {
                    alert('numero gi inserito')
                }
            }
        }

        for(var x = 0; x < userNumbers.length; x++) {
            if (pcNumbers.includes(userNumbers[x])) {
                document.querySelector('.result').innerHTML += 'numero c\'è ' + userNumbers[x] + '<br>';
                pcNumbers.splice(pcNumbers.indexOf(userNumbers[x]), 1)
            } else {
                document.querySelector('.result').innerHTML += 'numero non c\'è ' + userNumbers[x] + '<br>';
            }
        }
        document.querySelector('.result').innerHTML += 'i numeri che hai dimenticato sono ' + pcNumbers;
    }, 30000)


});

