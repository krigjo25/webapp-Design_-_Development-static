// Alert dialog box
alert("Welcome to our Super Hero Quiz !");

// Variable declaration
var ninjaQuiz: string[][] = [
    ["What is the real Name of the character SuperGirl", "Karen Denvers"],
    ["Who is the brother of Karen Denvers?", "Clark Kent"],
    ["What is the real Name of the character Batman?", "Bruce Wayne"],
    ["What is the real Name of the character Spiderman", "Peter Parker"],
    ["What is the real Name of the character Wonderwoman", "Dianna Prince"]
];

var Gcore: number = 0;  // Gscore, the score point of Ninja Quiz.

play(ninjaQuiz);

function play(ninjaQuiz: string[][]): void {
    for (var i = 0; i < ninjaQuiz.length; i++) {
        var question = ninjaQuiz[i][0];
        var answer = ask(question);
        check(answer, ninjaQuiz[i][1]);
    }
    gameOver();
}

function ask(question: string): string | null {
    return prompt(question);
}

function check(answer: string | null, correctAnswer: string): void {
    if (answer === correctAnswer) { // Hvis Svar er lik spørsmålet
        alert("Congratulations you had the correct answer");
        Gcore++;
    } else { 
        alert("Fail, you've written incorrect name.");
    }
}

function gameOver(): void {	
    // After the game is over
    if (Gcore >= 5) {
        alert("Congratulations, you've answered" + " " + Gcore + " " + " Of 5 possible Gcore");  
    } else {
        alert("Game over, better luck next time, you've received:  " + Gcore + " Gcore");
    }
}
