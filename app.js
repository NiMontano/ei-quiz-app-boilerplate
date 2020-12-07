/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the abbreviation of the agency that Archer works for?',
      answers: [
        'CIA',
        'ODIN',
        'MI6',
        'ISIS'
      ],
      correctAnswer: 'ISIS'
    },
    {
      question: 'How long was Archer in a coma?',
      answers: [
        '1 year',
        '2 years',
        '3 years',
        '4 years'
      ],
      correctAnswer: '3 years'
    },
    {
      question: 'What is the name of Carol\'s/Cheryl\'s ocelot?',
      answers: [
        'Babu',
        'Bobo',
        'Bubbles',
        'Bear'
      ],
      correctAnswer: 'Babu'
    },
    {
      question: 'Who is Archer\'s father?',
      answers: [
        'Nikolai Jakov, head of the KGB',
        'Unknown',
        'Len Trexler',
        'Ray Gillette'
      ],
      correctAnswer: 'Unknown'
    },
    {
      question: 'Who does not have bionic limbs?',
      answers: [
        'Ray Gillette',
        'Conway Stern',
        'Cyril Figgis',
        'Other Barry'
      ],
      correctAnswer: 'Cyril Figgis'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

i = 0;
const currentQuestion = store.questions[i].question;
const currentAnswers = store.questions[i].answers;
const rightAnswer = store.questions[1-i].correctAnswer;
const questionAndAnswer = store

function beginQuiz() {  

  console.log("something here")

  $(document).on("click", ".start",function() {
    store.quizStarted = true
    store.questionNumber = 1
    renderQuestion();
  });

  if (store.quizStarted == false) {
    $('.js-this-question').html(`<button class="start" type = "button">Start Quiz</button>`)
  };
}

function updateQuestion() {
  $("#submit-answer").submit(function(event) {
    const rightAnswer = store.questions[i].correctAnswer;

    i = ++i;

    const currentQuestion = store.questions[i].question;
    const currentAnswers = store.questions[i].answers;

    const selectedAnswer = $("input[type='radio']:checked").val();

    const theAnswers = currentAnswers.map(function (currentAnswer) {
      
      return `<li><input type="radio" name="answer" value="${currentAnswer}" required> ${currentAnswer}</li>`;
    }).join('');

    theEntireQuestion = `${currentQuestion}<form id="submit-answer">${theAnswers}<input type="submit"></form>`;

    $('.js-this-question').html(theEntireQuestion);

    if (selectedAnswer == rightAnswer) {
      store.questionNumber = ++store.questionNumber;
      store.score = ++store.score;
      alert("Correct!");
    } else {
      store.questionNumber = ++store.questionNumber
      alert("The correct answer is " + `${rightAnswer}`);
    };

      renderQuestion();

  });

  console.log("`updateQuestion` is running");
};

function renderQuestion() {

  console.log('`renderQuestion` ran');

  const currentQuestion = store.questions[i].question;
  const currentAnswers = store.questions[i].answers;

  const theAnswers = currentAnswers.map(function (currentAnswer) {
    return `<li><input type="radio" name="answer" class="answer" value="${currentAnswer}" required> ${currentAnswer}</li>`;
    }).join('');
  
    theEntireQuestion = `<h2> Question ${store.questionNumber}</h2><h3>Score: ${store.score} /10</h3> ${currentQuestion}<form id="submit-answer">${theAnswers}<input type="submit"></form>`;
  
    $('.js-this-question').html(theEntireQuestion);

    updateQuestion();
  };


 
$(function handleArcherQuiz() {
  beginQuiz();
});

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)