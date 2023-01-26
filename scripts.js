// TDD

// Test: Will generate a random number between 1 and 6
// Code:
// Expected output:

// function playerRoll() {
//     let roll = Math.random();
//     roll = Math.ceil(roll * 6);
//     return roll;
// }
// console.log(playerRoll());


// Test: Will assign random number to a variable
// Code:
// Expected output:

// function playerRoll() {
//     let roll = Math.random();
//     roll = Math.ceil(roll * 6);
//     return roll;
// }




// Test:Will add variable to a running sum
// Code:
// Expected output:
//make an object that allows us to have a running sum

//Business Logic

function CreatePlayer(playerNumber) {
    this.playerName = playerNumber;
    this.lastRoll = 0;
    this.currentSum = 29;
    this.to30 = 30 - this.lastRoll;
}

CreatePlayer.prototype.updateSum = function () {
    let playerRoll = initializePlayerRoll();
    if (playerRoll === 1) {
        this.lastRoll = playerRoll;
        this.currentSum = 0;
        this.to30 = 30 - this.currentSum;
    } else {
        this.lastRoll = playerRoll;
        this.currentSum = this.currentSum + playerRoll;
        this.to30 = 30 - this.currentSum;
    }
}

function initializePlayerRoll() {
    let roll = Math.random();
    roll = Math.ceil(roll * 6);
    return roll;
}


let player1 = new CreatePlayer(1);
let player2 = new CreatePlayer(2);


CreatePlayer.prototype.winCheck = function() {
    if (this.currentSum >= 30) {
        return this.playerName;
    }
}

//UI Logic

window.addEventListener("load", function (){

        let turnCounter = 1;
     
        rollButtonPlayer1 = document.getElementById("button1");
        rollButtonPlayer1.addEventListener("click", function() {

            if (turnCounter % 2 === 1) {

                player1.updateSum();

                let lastRollPlayer1 = document.getElementById("lastrollplayer1");
                lastRollPlayer1.innerText = player1.lastRoll;

                let currentSumPlayer1 = document.getElementById("currentsumplayer1");
                currentSumPlayer1.innerText = player1.currentSum;

                let to30Player1 = document.getElementById("to30player1");
                to30Player1.innerText = player1.to30;

                turnCounter++;
                let winCheckP1 = player1.winCheck();

                if (winCheckP1 === 1) {
                    document.getElementById("button1").disabled = true;
                    document.getElementById("button2").disabled = true;
                    document.getElementById("winCheckPlayer1").innerText = "You've won!";
                    document.getElementById("winCheckPlayer2").innerText = "You've lost!";
                    document.getElementById("button3").removeAttribute("class");

                }
            
            }
        });

        rollButtonPlayer2 = document.getElementById("button2");
        rollButtonPlayer2.addEventListener("click", function() {

            if (turnCounter % 2 === 0) {
                player2.updateSum();

                let lastRollPlayer2 = document.getElementById("lastrollplayer2");
                lastRollPlayer2.innerText = player2.lastRoll;

                let currentSumPlayer2 = document.getElementById("currentsumplayer2");
                currentSumPlayer2.innerText = player2.currentSum;

                let to30Player2 = document.getElementById("to30player2");
                to30Player2.innerText = player2.to30;
            
                turnCounter++;
                let winCheckP2 = player2.winCheck();

                if (winCheckP2 === 2) {
                    document.getElementById("button1").disabled = true;
                    document.getElementById("button2").disabled = true;
                    document.getElementById("winCheckPlayer2").innerText = "You've won!";
                    document.getElementById("winCheckPlayer1").innerText = "You've lost!";
                    document.getElementById("button3").removeAttribute("class");
                }
            }
        });

        newGameButton = document.getElementById("button3");
        console.log(newGameButton);
        newGameButton.addEventListener("click", function(){
            console.log("test");
            let to30Player1 = document.getElementById("winCheckPlayer1");
            let to30Player2 = document.getElementById("winCheckPlayer2");
            let to30InsidePlayer1 = document.getElementById("to30Player1");
            to30Player1.innerText = " to 30!";
            to30InsidePlayer1.innerText = "______";
            
            player1.currentSum = 0;
            player2.currentSum = 0;

            document.getElementById("button1").disabled = false;
            document.getElementById("button2").disabled = false;

        });

});


