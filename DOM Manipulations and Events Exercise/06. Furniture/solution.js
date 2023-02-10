function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'))
  generateBtn.addEventListener('click', generate)
  buyBtn.addEventListener('click', buy)

  function generate(){
    const input = JSON.parse(document.querySelector('textarea').value)
    input.forEach((element) =>{
      const tr = document.createElement('tr')
      const tdImage = document.createElement('td')
      const img = document.createElement('img')
      img.src = element.img
      tdImage.appendChild(img)
      tr.appendChild(tdImage)

      const pName = document.createElement('p')
      const tdName = document.createElement('td')
      pName.textContent = element.name
      tdName.appendChild(pName)
      tr.appendChild(tdName)

      const tdPrice = document.createElement('td')
      const pPrice = document.createElement('p')
      pPrice.textContent = Number(element.price)
      tdPrice.appendChild(pPrice)
      tr.appendChild(tdPrice)

      const tdDecor = document.createElement('td')
      const pDecor = document.createElement('p')
      pDecor.textContent = Number(element.decFactor)
      tdDecor.appendChild(pDecor)
      tr.appendChild(tdDecor)

      const tdCheckBox = document.createElement('td')
      const input = document.createElement('input')
      input.type = 'checkbox'
      tdCheckBox.appendChild(input)
      tr.appendChild(tdCheckBox)
      document.querySelector('tbody').appendChild(tr)
    })
  }

  function buy(){
    const checkBoxes = Array.from(document.querySelectorAll('tbody input'))
    .filter((x) => x.checked)
    const bought = []
    let price = 0
    let decoration = 0
    checkBoxes.forEach((element) => {
      const parent = element.parentElement.parentElement
      const data = Array.from(parent.querySelectorAll('p'))
      bought.push(data[0].textContent)
      price += Number(data[1].textContent)
      decoration += Number(data[2].textContent)
    })
    const output = document.querySelectorAll('textarea')[1]
    output.textContent += `Bought furniture: ${bought.join(', ')}\r\n`
    output.textContent += `Total price: ${price.toFixed(2)}\r\n`
    output.textContent += `Average decoration factor: ${decoration / checkBoxes.length}`
  }
}

Unexpected error: Output textarea is different: expected 
'Bought furniture: Tablet, Vase\nTotal pprice: 2015.00\nAverage decoration factor: 7.6' to equal 
'Bought furniture: Tablet, Vase\nTotal price: 2015.00\nAverage decoration factor: 7.6'