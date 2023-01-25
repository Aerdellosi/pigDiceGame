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



function CreatePlayer(playerNumber) {
    this.playerName = playerNumber;
    this.lastRoll = 0;
    this.currentSum = 0;
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


console.log(player1)


