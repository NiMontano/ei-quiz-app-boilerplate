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
        'Len Trexler',
        'Ray Gillette',
        'Unknown'
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
    },
    {
      question: 'What is the name of Archer\'s child?',
      answers: [
        'Abbejean',
        'Woodhouse',
        'Seamus',
        'Ron Cadillac'
      ],
      correctAnswer: 'Abbejean'
    },
    {
      question: 'What is not one of Archer\'s fears?',
      answers: [
        'Aneurysm',
        'The Bermuda Triangle',
        'Sentient Robots',
        'Tigers'
      ],
      correctAnswer: 'Tigers'
    },
    {
      question: 'What color turtleneck does Archer wear on covert spy missions?',
      answers: [
        'Black',
        'Slightly Darker Black',
        'Navy',
        'Aubergine'
      ],
      correctAnswer: 'Slightly Darker Black'
    },
    {
      question: 'What has not been an occupation of Archer when he\'s run away?',
      answers: [
      'Videographer',
      'Pirate King',
      'Island Bartender',
      'Burger Chef'
      ],
      correctAnswer: 'Videographer'
    },
    { 
      question: 'Was this hard?',
      answers: [
        'Sploosh',
        'YOU\'RE NOT MY SUPERVISOR',
        'Phrasing, BOOM!',
        'Innapprops'
      ],
      correctAnswer: 'Phrasing, BOOM!'
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
  i = 0;
  const currentQuestion = store.questions[i].question;
  const currentAnswers = store.questions[i].answers;
  const rightAnswer = store.questions[1-i].correctAnswer;

  $('.js-this-question').html(`<button class="start" type = "button">Start Quiz</button>`)

  $(document).on("click", ".start",function() {
    store.quizStarted = true;
    store.questionNumber = 1;
    store.score = 0;
    if (store.quizStarted == true) {
      renderQuestion();
    };
  });
}

function updateQuestion() {
  $("#submit-answer").submit(function(event) {
    const rightAnswer = store.questions[i].correctAnswer;
    const currentQuestion = store.questions[i].question;
    const currentAnswers = store.questions[i].answers;
    //const currentQuestionNumber = store.questionNumber[i]

    i = ++i;

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

    if (store.questionNumber > 10) {

      $('.js-this-question').html(`<h2>Finished!</h2><h3>Your score is: ${store.score}`);

      if(store.score <= 4) {
        $('.js-this-question').append('<h3>DANGER ZONE!!<br>Watch more Archer.</h3></h3><button class="restart" type = "button">Restart Quiz</button>');
      } else if(store.score <= 7) {
        $('.js-this-question').append('<h3>What are you, hourly?<br>Watch more Archer.</h3></h3><button class="restart" type = "button">Restart Quiz</button>');
      } else {
        $('.js-this-question').append('<h3>Holy Sh*tsnacks!<br>Congratulations</h3></h3><button class="restart" type = "button">Restart Quiz</button>');
      }
    

      $(document).on("click", ".restart",function() {
        store.quizStarted = false;
        beginQuiz();
      });
      return;
    }
      renderQuestion();
  });
};

function renderQuestion() {

  const currentQuestion = store.questions[i].question;
  const currentAnswers = store.questions[i].answers;
  const theAnswers = currentAnswers.map(function (currentAnswer) {
    return `<li><input type="radio" name="answer" class="answer" value="${currentAnswer}" required> ${currentAnswer}</li><br>`;
  }).join('');
  
  theEntireQuestion = `<h2> Question ${store.questionNumber}</h2><h3>Score: ${store.score} /10</h3> ${currentQuestion}<br><br><form id="submit-answer">${theAnswers}<input type="submit"></form>`;
  
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