document.addEventListener('DOMContentLoaded', function () {
    const optionsList = document.getElementById('options-list');
    optionsList.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        checkAnswer(event.target);
      }
    });
  });
  
  function checkAnswer(selectedOption) {
    // Define the correct answer (change this based on your quiz)
    const correctAnswer = "A. Paris";
    const resultElement = document.getElementById('result');
  
    // Check if the selected option is correct
    if (selectedOption.textContent === correctAnswer) {
      selectedOption.classList.add("correct");
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#7FFF7F"; // Green
    } else {
      selectedOption.classList.add("incorrect");
  
      // Highlight the correct answer in green
      const options = document.querySelectorAll('#options-list li');
      options.forEach(option => {
        if (option.textContent === correctAnswer) {
          option.classList.add("correct");
        }
      });
  
      resultElement.textContent = "Wrong! The correct answer is " + correctAnswer;
      resultElement.style.color = "#FF7F7F"; // Red
    }
  
    // Disable further clicks on options
    const options = document.querySelectorAll('#options-list li');
    options.forEach(option => {
      option.style.pointerEvents = 'none';
    });
  }
  