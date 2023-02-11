function notify(message) {
  let divContent = document.getElementById('notification')
  divContent.textContent = message
  divContent.style.display = 'block'
  divContent.addEventListener('click', 
  () => divContent.style.display = 'none'
  )
}