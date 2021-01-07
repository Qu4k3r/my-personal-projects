// Step 2 & 3 - verify data format and throw error message
function submitValues() {
  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    deleteResultDiv()
    showTextContent()
    showSelectContent()
  })
}

submitValues()

// Step 3 & 4 - create a div that shows all the keys and values of data submitted
function createDivArrays(array) {
  for (let key of array) {
    const resultDiv = document.createElement('div')
    resultDiv.className = 'result-div'
    resultDiv.innerText = `${key.value}`
    document.body.appendChild(resultDiv)
  }
}

function createSimpleDiv(element) {
  const resultDiv = document.createElement('div')
  resultDiv.className = 'result-div'
  resultDiv.innerText = element
  return resultDiv
}

function showTextContent() {
  const arrayOfResults = document.querySelectorAll('input[type=text]')
  createDivArrays(arrayOfResults)
}

function showSelectContent() {
  const mySelectValue = document.querySelector('select').value
  const resultDiv = createSimpleDiv(mySelectValue)
  document.body.insertBefore(resultDiv, document.body.childNodes[18])
}

function deleteResultDiv() {
  const myArrayDiv = document.querySelectorAll('.result-div')
  for (let div of myArrayDiv) {
    div.remove()
  }
}

// select, type=radio, textarea, type=date
