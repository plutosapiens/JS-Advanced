function toggle() {
    const button = document.getElementsByClassName('button')[0]
    const extraContent = document.getElementById('extra')
    
    if(button.textContent == 'More'){
        button.textContent = 'Less'
        extraContent.style.display = 'block'
    }
    else{
        button.textContent = 'More'
        extraContent.style.display = 'none'
    }
}