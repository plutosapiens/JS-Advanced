function solve() {
  let array = document.getElementById('input').value.split('.').filter(element => element.length>0)
  let output = document.getElementById('output')
  let paragraph = []
  for(let i=0; i<array.length; i+=3){
    let currentParagraph = []
    for(let j=0; j<3; j++){
      if(array[i+j]){
        currentParagraph.push(array[i+j])
      }
    }
    paragraph = (currentParagraph.join('. ')+'.')
    output.innerHTML += `<p>${paragraph}</p>`
  }
}