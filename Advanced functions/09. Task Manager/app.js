function solve() {
    const inputTask = document.querySelector('#task')
    const inputDesc = document.querySelector('#description')
    const inputDate = document.querySelector('#date')
    const [inputSection, openSection, progressSection, completeSection] = 
    document.querySelectorAll('section')

    const addBtn = document.querySelector('#add')
    addBtn.addEventListener('click', addToDo)
    function addToDo(event){
        event.preventDefault()
        if(
            inputTask.value.trim() == '' ||
            inputDesc.value.trim() == '' ||
            inputDate.value.trim() == ''
            ){
                return
        }

    //create the ticket
        const article = document.createElement('article')
    //put info in the ticket, taken form the input
        const h3 = document.createElement('h3')
        h3.textContent = inputTask.value
        const pDesc = document.createElement('p')
        pDesc.textContent = `Description: ${inputDesc.value}`
        const pDate = document.createElement('p')
        pDate.textContent = `Due Date: ${inputDate.value}`
    //make buttons with actions on the ticket
        const divBtns = document.createElement('div')
        divBtns.classList.add('flex')
        const startBtn = document.createElement('button')
        startBtn.classList.add('green')
        startBtn.textContent = 'Start'
        startBtn.addEventListener('click', startArticle) //startArticle() will be added further down in the code
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('red')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteArticle)//deleteArticle() will be added further down in the code
    //put the created elements in the divs
        divBtns.appendChild(startBtn)
        divBtns.appendChild(deleteBtn)
        article.appendChild(h3)
        article.appendChild(pDesc)
        article.appendChild(pDate)
        article.appendChild(divBtns)
    //put the article(containing the desc and buttons in the html)
        openSection.lastElementChild.appendChild(article)
    //clear the values inside the input boxes
        inputTask.value = ''
        inputDesc.value = ''
        inputDate.value = ''

    //create startArticle function
        function startArticle() {
        //since we've started the article we don't need the start button anymore. Instead we get finish button
            startBtn.remove()
            const finishBtn = document.createElement('button')
            finishBtn.classList.add('orange')
            finishBtn.textContent = 'Finish'
            finishBtn.addEventListener('click', finishArticle)
            divBtns.appendChild(finishBtn)
            progressSection.lastElementChild.appendChild(article)//adding it to progressSection so it could show up in the right column
        }

        function deleteArticle() {
            article.remove()
        }

        function finishArticle() {
            divBtns.remove() //we've finished so we don't need buttons
            completeSection.lastElementChild.appendChild(article)
        }
    }
}