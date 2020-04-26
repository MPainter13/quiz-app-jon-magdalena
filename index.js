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
        'Warsaw',
        'Lviv',
        'Madrid'
      ],
      correctAnswer: 'Warsaw'
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
  score: 0,
  correct: 0,
  wrong: 0
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


function generateTitlePageHTML() {
  return `
    <div class='title-page quiz-container'>
        <h2>Capitals Quiz</h2>
        <button class='start-quiz'>Start Quiz</button>
    </div>`;

}

function generateQuestionPageHtml() {
  let currentQuestion = store.questions[store.questionNumber]
  let answersHTML = '';
  currentQuestion.answers.forEach((answer, i) => {
    answersHTML += `
    <div class='option-container' id="option-container-${i}">
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
            <p class='correct'>Correct: ${store.correct} of ${store.questions.length}</p>
            <p class='incorrect'>Incorrect: ${store.wrong} of ${store.questions.length}</p>
        </div>
        <form class='answer-choices' action="">
            ${answersHTML}
        <button type='submit' class='submit-answer'>Submit Answer</button>
        </form>
    </div>`;

}

function generateCorrectPageHTML() {
  return `
    <div class='correct-answer quiz-container'>
        <h2 class='correct-head'>Correct :)</h2>
        <div>
            <p class='correct'>Correct: ${store.correct} of ${store.questions.length}</p>
            <p class='incorrect'>Incorrect: ${store.wrong} of ${store.questions.length}</p>
        </div>
        <button class='next-question'>Next Question</button>
    </div>`;

}

function generateWrongPageHTML() {
  let currentQuestion = store.questions[store.questionNumber]
  return `
    <div class='wrong-answer quiz-container'>
        <h2 class='incorrect-head'>Incorrect :(</h2>
        <p class='answer-correct'>Correct Answer: ${currentQuestion.correctAnswer}</p>
        <div>
            <p class='correct'>Correct: ${store.correct} of ${store.questions.length}</p>
            <p class='incorrect'>Incorrect: ${store.wrong} of ${store.questions.length}</</p>
        </div>
        <button class='next-question'>Next Question</button>
    </div>`;
 
}

function generateEndPageHTML() {
  return `
    <div class='end-screen quiz-container'>
        <h2>End of Quiz</h2>
        <div>
            <p class='correct'>Correct: ${store.correct} of ${store.questions.length}</p>
            <p class='incorrect'>Incorrect: ${store.wrong} of ${store.questions.length}</p>
        </div>
        <button class='retry'>Retry</button>
    </div>`;

}


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
    store.questionNumber = 0;
    store.correct = 0;
    store.wrong = 0;
    renderQuestion();
  })
}

function clickSubmitButton() {
  $('.quiz-app').on('submit', '.answer-choices', event => {
    event.preventDefault();
    let currentQuestion = store.questions[store.questionNumber]
    let selectedOption = $('input[name=options]:checked').val();
    if (selectedOption === currentQuestion.correctAnswer) {
      store.correct += 1;
      renderCorrect(); 
    }
    else {
      store.wrong += 1;
      renderWrong();
}
  })
}

function clickNextQuestion() {
  $('.quiz-app').on('click', '.next-question', event => {
    event.preventDefault();
    store.questionNumber += 1;
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
