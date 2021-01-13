const btnEntrar = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');
const mySubmitButton = document.querySelector('#facebook-register');
const myInputRadioValues = document.querySelectorAll('input[type=radio]');
const myInputValues = document.querySelectorAll('input');


function addlistener(obj, func) {
  obj.addEventListener('click', func);
}

function alertMsgLogIn() {
  alert(inputEmail.value);
}

function verifyTextValues() {
  let isTrue = true;
  for (let index = 2; index < 7; index += 1) {
    if (myInputValues[index].value === '') {
      isTrue = false;
      break;
    }
  }
  return isTrue;
}

function verifyRadioValues() {
  let isChecked = false;
  for (const inputRadio of myInputRadioValues) {
    if (inputRadio.checked) {
      isChecked = true;
      break;
    }
  }
  return isChecked;
}

function verifyValues(event) {
  event.preventDefault();
  if (!verifyTextValues() || !verifyRadioValues()) {
    return alert('Campos inválidos');
  }
}

addlistener(btnEntrar, alertMsgLogIn);
addlistener(mySubmitButton, verifyValues);

function showInputGenderCustom() {
  const radioInput = document.querySelector('#other');
  const inputGenderCustom = document.querySelector('.other-gender');
  if (radioInput.checked) {
    inputGenderCustom.style.display = 'block';
  }
  else {
    inputGenderCustom.style.display = 'none';
  }
}

const genderOptions = document.querySelector('.gender-container');
addlistener(genderOptions, showInputGenderCustom);
