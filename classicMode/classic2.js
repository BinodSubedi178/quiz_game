let scoreArea = document.getElementById('score');
let score = 0;
let count = 0;
let realAnswer;
scoreArea.innerHTML = score;
let correctAnswer;
// Timer 
function startTimer() {
    var seconds = 30;
    var timerDisplay = document.getElementById('timer');

    function updateTimer() {
        timerDisplay.innerText = seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
            timerComplete();
        } else {
            seconds--;
        }

    }
    var timerInterval = setInterval(updateTimer, 1000);

}
// when timer completes 
function timerComplete() {
    getOpenTriviaQuestion();
    startTimer();
}

//Fetch Question

function getOpenTriviaQuestion() {
    const apiUrl = "https://opentdb.com/api.php";
    const params = new URLSearchParams({
        amount: 1,           // Request only one question at a time
        type: "multiple",   // Multiple-choice questions
        category: 9,        // Example category (General Knowledge)
        difficulty: "medium" // Example difficulty level
    });

    fetch(`${apiUrl}?${params}`)
        .then(response => response.json())
        .then(data => {
            if (data.response_code === 0) {
                const questionData = data.results[0];
                const question = questionData.question;
                const correctAnswer = questionData.correct_answer;
                const incorrectAnswers = questionData.incorrect_answers;
                console.log("Question:", question);
                realAnswer = correctAnswer;

                const options = incorrectAnswers.concat(correctAnswer);
                options.sort(() => Math.random() - 0.5); // Shuffle the options

                let questionArea = document.getElementById('question');
                questionArea.innerHTML = question;

                for (let index = 0; index < options.length; index++) {
                    let optionArea = document.getElementById(`option-${index + 1}`);
                    optionArea.innerHTML = `${index + 1}. ${options[index]}`;

                }
            } else {
                console.error("Error fetching question");
                console.log("This is console written by Binod to let myself know that data fetching is not working.")
            }

        })
        .catch(error => console.error("Error:", error));
}


// getOpenTriviaQuestion(); 
if ( getOpenTriviaQuestion)
startTimer();

let optionCheck = document.getElementById(`option-1`)
optionCheck.addEventListener('click', () => {
    optionCheckText = (optionCheck.innerHTML).substring(2).trim();
    console.log(optionCheckText)
    console.log(realAnswer)
    if (optionCheckText === realAnswer){
        score = (score + 10);
        scoreArea.innerHTML = score;
        // getOpenTriviaQuestion(); 
        timerComplete();
    }
    else{
        // getOpenTriviaQuestion(); 
        timerComplete();
    }
    
})