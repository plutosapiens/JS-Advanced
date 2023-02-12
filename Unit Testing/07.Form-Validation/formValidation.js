function validate() {
    const button = document.getElementById('submit')
    const isCompany = document.getElementById('company')
    const companyInfo = document.getElementById('companyInfo')

    isCompany.addEventListener('change', () =>{
        if(isCompany.checked){
            companyInfo.style.display = 'block'
        }
        else{
            companyInfo.style.display = 'none'
        }
    })
    button.addEventListener('click', (event)=>{
        let validChecker = true
        const name = document.getElementById('username')
        const email = document.getElementById('email')
        const pass1 = document.getElementById('password')
        const pass2 = document.getElementById('confirm-password')
        const form = document.getElementById('registerForm')
        const companyNumber = document.getElementById('companyNumber')
        const validField = document.getElementById('valid')
        
        //check if it is a company and add company number question
        //prevent the page from refreshing when clicking on submit, so that the company nimber question stays
        form.addEventListener('submit', (event)=>{
            event.preventDefault()
        })
        
        const namePattern = /^[a-zA-Z0-9]{3,20}$/g
        const passPattern = /^[\w]{5,15}$/
        const emailPattern = /.*@*\..*/

        
        
        if(namePattern.exec(name.value) === null){
            name.style.borderColor = 'red'
            validChecker = false
            console.log('name problem')
        }
        else{
            name.style.borderColor = ''
        }
        
        if(emailPattern.exec(email.value) == null){
            email.style.borderColor = 'red'
            validChecker = false
            console.log('mail prob')
        }
        else{
            email.style.borderColor = ''
        }
        
        if(passPattern.exec(pass1.value) !== null && pass1.value == pass2.value){
            pass1.style.borderColor = ''
        }
        else{
            pass1.style.borderColor = 'red'
            pass2.style.borderColor = 'red'
            console.log('pass probl')
            validChecker = false
        }

    if(isCompany.checked){
        if(companyNumber.value >=1000 || companyNumber.value<=9999){
            companyNumber.style.borderColor = 'red'
            console.log('companyprob')
            validChecker = false
        }
        else{
            companyNumber.style.borderColor = ''
        }
    }
    else{
        companyNumIsValid = true
    }
    
    if(validChecker==true){
        validField.style.display = 'block'
    }
    else{
        validField.style.display = 'none'
    }
    console.log(validChecker)
})
}
