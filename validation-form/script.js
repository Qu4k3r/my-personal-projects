// Step 2 & 3 - verify data format and throw error message
function submitValues() {
  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    deleteResultDiv()
    showAllContent()
  })
}

submitValues()

// Step 3 & 4 - create a div that shows all the keys and values of data submitted
function showAllContent() {
  const arrayOfResults = document.querySelectorAll('input')
  for (let key of arrayOfResults) {
    const resultDiv = document.createElement('div')
    resultDiv.className = 'result-div'
    resultDiv.innerText = `${key.value}`
    document.body.appendChild(resultDiv)
  }
}

function deleteResultDiv() {
  const myArrayDiv = document.querySelectorAll('.result-div')
  for (let div of myArrayDiv) {
    div.remove()
  }
}

// The exercise is not complete
// I'll try to finish it later because right now ... I can't
