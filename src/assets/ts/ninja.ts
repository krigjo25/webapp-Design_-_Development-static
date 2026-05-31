import { QuizData, QuizQuestion } from '../../types/ninja';

// Alert dialog box
alert("Welcome to our Super Hero Quiz !");

// Variable declaration
const ninjaQuiz: QuizData = [
    ["Who is the brother of Karen Denvers?", "Clark Kent"],
    ["What is the real Name of the character Batman?", "Bruce Wayne"],
    ["What is the real Name of the character Spiderman", "Peter Parker"],
    ["What is the real Name of the character SuperGirl", "Karen Denvers"],
    ["What is the real Name of the character Wonderwoman", "Dianna Prince"]
];

let Gcore: number = 0;  // Gscore, the score point of Ninja Quiz.

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 */
function shuffle(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Randomize questions before starting
play(shuffle([...ninjaQuiz]));

function play(quizData: QuizData): void {
    for (let i = 0; i < quizData.length; i++) {
        const questionData: QuizQuestion = quizData[i];
        const question = questionData[0];
        const answer = ask(question);
        check(answer, questionData[1]);
    }
    gameOver();
}

function ask(question: string): string | null { return prompt(question); }

function check(answer: string | null, correctAnswer: string): void {
    if (answer === correctAnswer) { // Hvis Svar er lik spørsmålet
        alert("Congratulations you had the correct answer");
        Gcore++;
    } else {  alert("Fail, you've written incorrect name."); }
}

function gameOver(): void {	
    if (Gcore >= 5) alert("Congratulations, you've answered" + " " + Gcore + " " + " Of 5 possible Gcore");  else alert("Game over, better luck next time, you've received:  " + Gcore + " Gcore");
}
