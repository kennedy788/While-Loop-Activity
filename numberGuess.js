const correctNumber = Math.floor(Math.random() * 10) + 1; 
let guess;
let attempts = 0;

while (guess !== correctNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    attempts++;

    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    } else if (guess === correctNumber) {
        console.log("Correct!");
    } else {
        console.log("Invalid input. Please enter a number between 1 and 10.");
    }
}

console.log(`You guessed the number in ${attempts} attempts.`);
