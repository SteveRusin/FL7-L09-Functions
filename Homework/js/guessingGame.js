(function () {
    var start = confirm('Hi! Do you want to start the game?');
    var askContinue = true;
    var startAgain = true;
    var triplePrize = 1;
    var doubleNumber = 1;
    var prizeTotal = 0;
    var tries;
    var randomNumber;


    function randomNumberGenerator() {
        randomNumber = Math.round(Math.random() * 5);
        randomNumber *= doubleNumber;
        console.log(randomNumber);
        return randomNumber;
    }


    function numberOfTries() {
        tries = 3;
        do {

            var userAnswer = parseInt(prompt('Try to guess a number from 0 to ' + 5 * doubleNumber + '. You have ' + tries + ' tries remain!', ''));

            if (isNaN(userAnswer)) {
                alert('Enter a number value.');
            } else if (userAnswer === randomNumber) {
                break;
            }
            tries--;
        } while (tries > 0)
        return tries;
    }


    function casesOfAnswer() {
        switch (tries) {
        case 3:
            prizeTotal += 10 * triplePrize;
            break;
        case 2:
            prizeTotal += 5 * triplePrize;
            break;
        case 1:
            prizeTotal += 2 * triplePrize;
            break;
        default:
            console.log('Your prize - 0$');
            startAgain = confirm('You lost! Do you want to play again?');
            break;
        }
    }

    
    function result() {
        if (tries > 0) {
            alert('Congratulations! You have won ' + prizeTotal + '$');
            askContinue = confirm('Do you want to continue?');
            triplePrize *= 3;
            doubleNumber *= 2;
        } else {
            doubleNumber = 1;
            triplePrize = 1;
            prizeTotal = 0;
        }
    }

    
    function endOfTheGame() {
        if (!askContinue) {
            console.log('Thanks for playing. Your total prize is - ' + prizeTotal + '$');
        }    
    }

    
    function game() {
        if (start) {
            do {
                randomNumberGenerator();
                numberOfTries();
                casesOfAnswer();
                result();
                endOfTheGame();
            } while ((askContinue === true)&&(startAgain===true))
        } else {
            console.log('You have not won a million today, but you could!');
        }
    }

    game();

})();
