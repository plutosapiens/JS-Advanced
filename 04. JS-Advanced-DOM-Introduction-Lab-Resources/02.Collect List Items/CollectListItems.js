function extractText() {
    const items = document.getElementById('items').children
    const itemArray = Array.from(items)
    const result = itemArray.map(li => li.textContent).join('\n')
    document.getElementById('result').value = result
}