/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the abbreviation for the agency that Archer works for?',
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
        'Mallory Archer',
        'Other Barry'
      ],
      correctAnswer: 'Mallory Archer'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

i = 0;
const currentQuestion = store.questions[i].question;
const currentAnswers = store.questions[i].answers;
const rightAnswer = store.questions[i].correctAnswer;
const questionAndAnswer = store

//function answerQuestion() {
  //store.questionNumber = i;
  
  //console.log('`answerQuestion` ran');
  
//};

//for (let i = 0; i < store.length; i++) 

function beginQuiz() {  

  console.log("something here")

  $(document).on("click", ".start",function() {
    console.log("button clicked")
    store.quizStarted = true
    renderQuestion();
  });

  if (store.quizStarted == false) {
    $('.js-this-question').html(`<button class="start" type = "button">Start Quiz</button>`)
  };

}

function renderQuestion() {
  console.log('`renderQuestion` ran');

  const theAnswers = currentAnswers.map(function (currentAnswer) {
    return `<li><input type="radio" name="answer"> ${currentAnswer}</li>`;
  }).join('');

  theEntireQuestion = `${currentQuestion}<form id="submit-answer">${theAnswers}<input type="submit"></form>`;

  $('.js-this-question').html(theEntireQuestion);

  $("#submit-answer").submit(function(event) {
        //alert ("The correct answer is " + `${rightAnswer}` + ".")
      
        i = ++i;

        const currentQuestion = store.questions[i].question;
        const currentAnswers = store.questions[i].answers;
        const rightAnswer = store.questions[i].correctAnswer;

        theEntireQuestion = `${currentQuestion}<form id="submit-answer">${theAnswers}<input type="submit"></form>`;

        $('.js-this-question').html(theEntireQuestion);

    });

   //console.log(theEntireQuestion);
  };
  //answerQuestion();


 
$(function handleArcherQuiz() {
  beginQuiz();
  //renderQuestion();
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