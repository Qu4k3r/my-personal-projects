// Variaveis & Constantes

//Funcoes
function drawLowerCase(lowercase) {
  if (lowercase) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65).toLowerCase()
  }
  return ''
}

function drawUpperCase(uppercase) {
  if (uppercase) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }
  return ''
}

function drawNumber(number) {
  if (number) {
    return Math.floor(Math.random() * 10)
  }
  return ''
}

function drawSymbol(symbol) {
  if (symbol) {
    const symbolsArray = '!@#$%^&*(){}[]=<>/,.'
    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
  }
  return ''
}

function setResult(lowercase, uppercase, number, symbol) {
  let newPassword = []
  const lengthValue = Number(document.querySelector('#length').value)
  while (newPassword.join('').length < lengthValue) {
    newPassword.push(drawLowerCase(lowercase))
    newPassword.push(drawUpperCase(uppercase))
    newPassword.push(drawNumber(number))
    newPassword.push(drawSymbol(symbol))
  }
  return newPassword.join('').slice(0, lengthValue)
}

function isChecked(lower, upper, number, symbol) {
  const arrayValues =  [lower, upper, number, symbol]
  let verifier = false
  arrayValues.forEach((item) => {
    if (item) {
      verifier = true
    }
  })
  return verifier
}

function generatePassword() {
  const generateButton = document.querySelector('.btn-large')
  generateButton.addEventListener('click', () => {
    const lowercase = document.querySelector('#lowercase').checked
    const uppercase = document.querySelector('#uppercase').checked
    const numbers = document.querySelector('#numbers').checked
    const symbols = document.querySelector('#symbols').checked
    if (isChecked(lowercase, uppercase, numbers, symbols)) {
      const myResult = document.querySelector('#result')
      myResult.innerText = setResult(lowercase, uppercase, numbers, symbols)
    }
    else {
      alert ('ERRO! Por favor, selecione pelo menos 1 opção!')
    }
  })
}

generatePassword()

function copyToClipboard() {
  const clipboardButton = document.querySelector('#clipboard')
  clipboardButton.addEventListener('click', () => {

    // Create an input element & set result text to its value
    const passwordGenerated = document.querySelector('#result')
    const inputElement = document.createElement('input')
    inputElement.value = passwordGenerated.innerText
    document.body.appendChild(inputElement)

    // Select the text field
    inputElement.select()

    // For mobile devices
    inputElement.setSelectionRange(0, 99999)

    // Copy the text inside the text field
    document.execCommand('copy')

    // Remove inputElment from body
    document.body.removeChild(inputElement)

    // Alert the copied text
    if (passwordGenerated.innerText !== '') {
      alert('Senha copiada para área de transferência: ' + passwordGenerated.innerText)
    }
  })
}

copyToClipboard()

const social_btn = document.querySelector('.social-btn');
const close_btn = document.querySelector('.fa-times');
const social_container = document.querySelector('.social-container');

social_btn.addEventListener('click', () => {
  social_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
  social_container.classList.remove('visible');
});
