


function checkEmailValidity() {
    const emailInput = document.getElementById("email.input");
    const errorMessage = document.getElementById("erroris-mesiji");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(emailInput.value)) {
      errorMessage.innerHTML = "Oops! Please check your email";
      errorMessage.style.color = 'red'
    } else {
      errorMessage.innerHTML = "Your Mail Is Valid";
      errorMessage.style.color = 'green'
    }
  }