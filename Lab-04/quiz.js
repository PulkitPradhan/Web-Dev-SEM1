// 1. Quiz Questions Array
// Storing questions and answers in an array of objects
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "jupiter"
    },
    {
        question: "What language is used for web structure?",
        answer: "html"
    },
    {
        question: "What keyword is used to declare a constant in JavaScript?",
        answer: "const"
    }
];

// 2. Function to Run the Quiz
function runQuiz() {
    // 3. Score Initialization
    let score = 0;

    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        // Check if user clicked Cancel
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // 5. Normalize the Input
        // Convert to lowercase and remove extra spaces
        let normalizedAnswer = userAnswer.toLowerCase().trim();

        // 6. Check the Answer
        if (normalizedAnswer === quizQuestions[i].answer) {
            // Correct answer
            score++;
            // 7. Provide Immediate Feedback (Correct)
            alert("Correct!");
        } else {
            // 8. Provide Immediate Feedback (Incorrect)
            alert("Wrong! The correct answer was: " + quizQuestions[i].answer);
        }
    }

    // 9. Display the Final Score
    alert("Quiz over! Your final score is: " + score + " out of " + quizQuestions.length);
}


runQuiz();
