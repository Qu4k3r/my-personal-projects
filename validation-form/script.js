//Step 3 & 4 - create a div that shows all the keys and values of data submitted
function createDivArrays(array) {
  for (let key of array) {
    const resultDiv = document.createElement('div')
    resultDiv.className = 'result-div'
    resultDiv.innerText = `${key.value}`
    document.body.appendChild(resultDiv)
  }
}

function deleteResultDiv() {
  const myArrayDiv = document.querySelectorAll('.result-div')
  for (const div of myArrayDiv) {
    div.remove()
  }
}

function createSimpleDiv(element) {
  const resultDiv = document.createElement('div')
  resultDiv.className = 'result-div'
  resultDiv.innerText = element
  return resultDiv
}

//Text content
function showTextContent() {
  const arrayOfResults = document.querySelectorAll('input[type=text]')
  createDivArrays(arrayOfResults)
}

//Select value
function showSelectContent() {
  const mySelectValue = document.querySelector('select').value
  const resultDiv = createSimpleDiv(mySelectValue)
  document.body.insertBefore(resultDiv, document.body.childNodes[20])
}

//type=radio, textarea, type=date
function showRadioValue () {
  const myOptions = document.querySelectorAll('input[type=radio]')
  for (const option of myOptions) {
    if (option.checked) {
      const resultDiv =  createSimpleDiv(option.value)
      document.body.insertBefore(resultDiv, document.body.childNodes[21])
    }
  } 
}

//Textarea content
function showTextAreaContent() {
  const myTextAreaValue = document.querySelector('textarea').value
  const resultDiv = createSimpleDiv(myTextAreaValue)
  document.body.insertBefore(resultDiv, document.body.childNodes[22])
}

//Date Value
function showDateValue() {
  const dateValue = document.querySelector('input[type=date]').value
  const resultDiv = createSimpleDiv(dateValue)
  document.body.insertBefore(resultDiv, document.body.childNodes[25])
}

function submitValues() {
  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    deleteResultDiv()
    showTextContent()
    showSelectContent()
    showRadioValue()
    showTextAreaContent()
    showDateValue()
  })
}

submitValues()
