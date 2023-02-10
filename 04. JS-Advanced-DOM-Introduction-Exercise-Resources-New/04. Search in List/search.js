function search() {
   const searchText = document.getElementById('searchText').value
   const townList = Array.from(document.querySelectorAll('#towns li'))
   const resultDiv = document.querySelector('#result')
   
   let counter = 0
   townList.forEach((element) => {
      if(element.textContent.includes(searchText)){
         element.style.fontWeight = 'bold'
         element.style.textDecoration = 'underline'
         counter ++
      }
      else{
         element.style.fontWeight = 'normal'
         element.style.textDecoration = 'none'
      }
   })
   resultDiv.textContent = `${counter} matches found`
}
