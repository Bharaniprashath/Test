  var attempts = 0;
  var wrongAttempts = 0;
  var goButton = document.getElementById('goButton');

  goButton.addEventListener('click', function() {
    var selectedOption = document.getElementById('options').value;
    attempts++;
    
    // Check if the selected option is wrong
    if (selectedOption !== 'option3') {
      wrongAttempts++;
      var chancesLeft = 3 - wrongAttempts;
      // If wrong answer is selected, show an alert with remaining chances
      alert("Wrong answer! You have " + chancesLeft + " chances left.");
      
      // If wrong answer is selected three times, close the window
      if (wrongAttempts === 3) {
        alert("You've selected the wrong answer three times. Exiting...");
        window.close(); // Close the window
      }
    }

    // If attempts exceed 3, close the window
    if (attempts >= 3 && selectedOption !== 'option3') {
      alert("You've exceeded the maximum number of attempts. Exiting...");
      window.close(); // Close the window
    }

    // If the third option is selected, add celebration class
    if (selectedOption === 'option3') {
      document.body.classList.add('celebrate');
      setTimeout(function() {
        alert("Congratulations! 🎉 You chose the correct answer.");
        window.location.href = 'css.html'; // Redirect after celebration
      }, 2000); // Celebration duration
    }
  });
