// Game Function rules:
// -Player must guess a number between a min and a max
// -Player gets a certain amount of guesses
// -Notify player of guesses remaining   
// -Notify player of the correct answer if lose
// -Let player choose to play again   


// Game values
let min=1,
    max =10,
    winningNum=getWinningNum(min,max),
    guessesLeft = 3;

// UI Elements

const gameWrapper = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener 
gameWrapper.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

//Listen for guess
guessBtn.addEventListener('click', function () {
     let guess = parseInt(guessInput.value); 

    //  Validate the input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(` Please enter a number between ${min} and ${max}`, "red");
    }

    // Check if won
    if (guess === winningNum) {
        // Game over - won
        gameOver(true, ` ${winningNum} is correct, YOU WIN!`)

    } else{
        // Wrong number
        guessesLeft -= 1;
        if (guessesLeft == 0) {
            // Game over -lost
        
        gameOver(false, `Game over ,you lost. The correct number was ${winningNum}`)


        }else{
            // Game continues - answer wrong
           
            // Change the border Color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = ' ';
            // Tell user it's the wrong number
            setMessage(` ${guess} is not correct, ${guessesLeft} guesses left`,"red");
        }
    }
});

// Gamer Over
function gameOver(won,msg) {
        let color;
        won === true?color='green' : color = 'red'; 

            // Disable the input
        guessInput.disabled = true;

        // Change the border Color
        guessInput.style.borderColor = color;

        // Set text Color
        message.style.color = color;
        
        // Set Message
        setMessage(msg);

        // Play Again
        guessBtn.value = 'play Again'
        guessBtn.className += 'play-again';
}

// Get winning number
function getWinningNum(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}