function validate() {
    const emailTemplate = /^([a-z]+@[a-z]+\.[a-z]+)/g
    const input = document.getElementById('email')
    input.addEventListener('change',() =>{
        if(input.value.match(emailTemplate)){
            input.classList.remove('error')
        }
        else{
            input.classList.add('error')
        }
    } )
} 