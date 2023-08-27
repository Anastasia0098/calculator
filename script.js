const displayElement = document.querySelector('.output');
const buttons = document.querySelectorAll('.button');

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', buttonClick);
});

// Function to handle button clicks
function buttonClick(event) {
  const clickedButtonValue = event.target.innerText;

  if (clickedButtonValue === 'C') {
    // Clear the display
    displayElement.innerText = '';
  } else if (clickedButtonValue === '=') {
    // Evaluate and display the result
    const expression = displayElement.innerText;
    const result = eval(expression);
    displayElement.innerText = result;
  } else {
    // Append the clicked button value to the display
    displayElement.innerText += clickedButtonValue;
  }
}