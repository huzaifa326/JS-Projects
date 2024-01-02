let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.btn');
let userVal = 0;

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    let value = e.target.innerText;

    if (value === 'C') {
      screen.value = '';
    }
    else if (value === '=') {
      evaluateUserInput(screen.value.toString());
      screen.value = userVal
    }
    else {
      screen.value += value;
    }
  });
});

// ================================

function evaluateUserInput(input) {
  if (input.includes('+')) {
    userVal = sumFunction(input);
  } 
  else if (input.includes('*')) {
    userVal = multiplyFunction(input);
  } 
  else if (input.includes('-')) {
    userVal = subtractFunction(input);
  } 
  else if (input.includes('/')) {
    userVal = divisionFunction(input);
  } 
  else {
    userVal = parseFloat(input);
  }
}

// ================================

function sumFunction(input) {
  var numbers = input.match(/\d+/g).map(Number);
  return numbers.reduce((total, num) => total + num, 0);
}

function multiplyFunction(input) {
  var numbers = input.match(/\d+/g).map(Number);
  return numbers.reduce((total, num) => total * num, 1);
}

function subtractFunction(input) {
  var numbers = input.match(/(-?\d+)/g).map(Number);
  return numbers.reduce((total, num) => total - num, 0);
}

function divisionFunction(input) {
  var numbers = input.match(/(-?\d+)/g).map(Number);
    if (numbers.length === 0) {
        return NaN;
    }
    return numbers.reduce((total, num) => total / num);
}
