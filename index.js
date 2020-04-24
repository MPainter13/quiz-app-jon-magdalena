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




  function generateTitlePageHTML() {
    return `
    <div class='title-page quiz-container'>
    <h2>Capitals Quiz</h2>

    <button>Start Quiz</button>
</div>`;
  }

  function generateQuestionPageHtml() {

  }

  function generateCorrectPageHTML() {

  }

  function generateWrongPageHTML() {

  }

  function generateEndPageHTML() {

  }

  /********** RENDER FUNCTION(S) **********/

  // This function conditionally replaces the contents of the <main> tag based on the state of the store


function renderQuizApp() {

}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function clickStartButton() {

}

function clickSubmitButton() {

}

function clickNextQuestion() {

}

function clickRetry() {
    
}




  
