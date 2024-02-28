const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function initQuiz() {
    showQuestion();
  }
  
  function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    
    questionContainer.textContent = quizData[currentQuestionIndex].question;
    optionsContainer.innerHTML = '';
  
    quizData[currentQuestionIndex].options.forEach((option, index) => {
      const optionElement = document.createElement('li');
      optionElement.innerHTML = `<label><input type="radio" name="option" value="${option}"> ${option}</label>`;
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        alert('Correct!');
      } else {
        alert(`Incorrect. The correct answer is ${correctAnswer}.`);
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < quizData.length) {
        showQuestion();
      } else {
        alert('Quiz completed! Thanks for playing.');
      }
    } else {
      alert('Please select an option.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', initQuiz);
  