'use strict';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the capital of USA?',
      answers: [
        'Washington D.C.',
        'Paris',
        'Berlin',
        'New York City'
      ],
      correctAnswer: 'Washington D.C.'
    },
    {
      question: 'What is the capital of Poland?',
      answers: [
        'Prague',
        'Warsow',
        'Lviv',
        'Madrid'
      ],
      correctAnswer: 'Warsow'
    },
    {
      question: 'What is the capital of Brazil?',
      answers: [
        'Moscow',
        'Brasilia',
        'Buenos Aires',
        'Oslo'
      ],
      correctAnswer: 'Brasilia'
    },
    {
      question: 'What is the capital of Hungary?',
      answers: [
        'Riga',
        'Tirana',
        'Budapest',
        'Vienna'
      ],
      correctAnswer: 'Budapest'
    },
    {
      question: 'What is the capital of Turkey?',
      answers: [
        'Athens',
        'Ankara',
        'Bratislava',
        'Amsterdam'
      ],
      correctAnswer: 'Ankara'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material, consult your instructor, and reference the slides for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates


// need to track correct and incorrect answers 
// make sure an answer is chosen
function generateTitlePageHTML() {
  console.log('title ran');
  return `
    <div class='title-page quiz-container'>
        <h2>Capitals Quiz</h2>
        <button class='start-quiz'>Start Quiz</button>
    </div>`;

}

// function generateQuestionNumberAndScoreHTML() {
//     const  = store.questions[store.currentQuestion].answers;
//     let answersHTML = '';
//     let i = 0;

//     answersArray.forEach(answer => {
//         answersHTML += `
//         <div id="option-container-${i}">
//             <input type="radio" name="options" id="option${i + 1}" value= "${answer}"
//             tabindex ="${i + 1}" required>
//             <label for="option${i + 1}"> ${answer}</label>
//         </div>
//         `;
//     });
//     console.log(answersHTML);
//     //return answersHTML;
// }

// need to link questions and answers
function generateQuestionPageHtml() {
  console.log('question ran')
  let currentQuestion = store.questions[store.questionNumber]
  console.log(currentQuestion)
  let answersHTML = '';
  currentQuestion.answers.forEach((answer, i) => {
    answersHTML += `
    <div id="option-container-${i}">
        <input type="radio" name="options" id="option${i + 1}" value= "${answer}"
        tabindex ="${i + 1}" required>
        <label for="option${i + 1}"> ${answer}</label>
    </div>
    `;
});
  return `
    <div class='question quiz-container'>
        <h2 class='question'>${currentQuestion.question}</h2>
        <div>
            <p class='correct'>correct answers</p>
            <p class='incorrect'>incorrect answers</p>
        </div>
        <form action="">
            ${answersHTML}
        </form>
        <button class='submit-answer'>Submit Answer</button>
    </div>`;

}

function generateCorrectPageHTML() {
  console.log('correct ran')
  return `
    <div class='correct-answer quiz-container'>
        <h2>Correct</h2>
        <div>
            <p class='correct'>correct answers</p>
            <p class='incorrect'>incorrect answers</p>
        </div>
        <button class='next-question'>Next Question</button>
    </div>`;

}

function generateWrongPageHTML() {
  console.log('wrong ran')
  return `
    <div class='wrong-answer quiz-container'>
        <h2>Incorrect</h2>
        <p>Correct Answer</p>
        <div>
            <p class='correct'>correct answers</p>
            <p class='incorrect'>incorrect answers</p>
        </div>
        <button class='next-question'>Next Question</button>
    </div>`;

}

function generateEndPageHTML() {
  console.log('end ran')
  return `
    <div class='end-screen quiz-container'>
        <h2>End of Quiz</h2>
        <div>
            <p class='correct'>correct answers</p>
            <p class='incorrect'>incorrect answers</p>
        </div>
        <button class='retry'>Retry</button>
    </div>`;

}

// function generateAnswerHtml() {
//     const answersArry = store.questionNumber[store.questionNumber].answers;
// }

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderTitlePage() {
  const titlePage = generateTitlePageHTML();
  $('.quiz-app').html(titlePage);
}

function renderQuestion() {
  const question = generateQuestionPageHtml();
  $('.quiz-app').html(question);
}

function renderCorrect() {
  const correct = generateCorrectPageHTML;
  $('.quiz-app').html(correct);
}

function renderWrong() {
  const wrong = generateWrongPageHTML;
  $('.quiz-app').html(wrong);
}

function renderEnd() {
  const end = generateEndPageHTML;
  $('.quiz-app').html(end);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function clickStartButton() {
  $('.quiz-app').on('click', '.start-quiz', event => {
    event.preventDefault();
    console.log('startbutton');
    store.questionNumber = 0;
    renderQuestion();
  })
}

function clickSubmitButton() {
  $('.quiz-app').on('click', '.submit-answer', event => {
    event.preventDefault();
    console.log('submit');
    // conditional needed to check if answer was right or wrong
    renderCorrect();
    renderWrong();
  })
}

function clickNextQuestion() {
  $('.quiz-app').on('click', '.next-question', event => {
    event.preventDefault();
    console.log('next');
    store.questionNumber += 1;
    // conditional needed to check if all the questions were 
    // answered so we go to end sreen or to next question
    if (store.questionNumber >= store.questions.length) {
      renderEnd();
    }
    else {
      renderQuestion();
    }
  })
}

function clickRetry() {
  $('.quiz-app').on('click', '.retry', event => {
    event.preventDefault();
    console.log('retry');
    renderTitlePage();
  })
}

// functions go here
const handleQuizApp = function () {
  renderTitlePage();
  clickStartButton();
  clickSubmitButton();
  clickNextQuestion();
  clickRetry();
}


$(handleQuizApp);
