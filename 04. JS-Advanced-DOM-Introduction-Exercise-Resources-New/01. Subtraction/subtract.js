function subtract() {
    const firstInput = document.getElementById('firstNumber').value
    const secondInput = document.getElementById('secondNumber').value

    const resultDiv = document.getElementById('result')
    let sub = Number(firstInput) - Number(secondInput)
    resultDiv.textContent = sub
}