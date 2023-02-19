window.addEventListener('load', solution)

function solution() {
    const firstNameInput = document.getElementById('first-name')
    const lastNameInput = document.getElementById('last-name')
    const fromDateInput = document.getElementById('from-date')
    const daysCountInput = document.getElementById('days-count')
    const peopleCountInput = document.getElementById('people-count')
    const nextButton = document.getElementById('next-btn')
    const ticketInfoList = document.querySelector('.ticket-info-list')

    nextButton.addEventListener('click', (event) => {
        event.preventDefault()
    // Check if all fields are filled
        if (
          firstNameInput.value.trim() !== '' &&
          lastNameInput.value.trim() !== '' &&
          fromDateInput.value.trim() !== '' &&
          daysCountInput.value.trim() !== '' &&
          peopleCountInput.value.trim() !== '' 
        ){
            const article = document.createElement('li')
            //create full name and aooend it to the article
            const fullName = document.createElement('h3')
            fullName.textContent = `${firstNameInput.value} ${lastNameInput.value}`
            article.appendChild(fullName)
            //create date and append
            const date = document.createElement('p')
            date.textContent = fromDateInput.value
            article.appendChild(date)
            //create duration and append
            const duration = document.createElement('p')
            duration.textContent = daysCountInput.value
            article.appendChild(duration)
            //create peopleCount
            const people = document.createElement('p')
            people.textContent = peopleCountInput.value
            article.appendChild(people)
            //finaly appending the full article to the ticketinfolist
            ticketInfoList.appendChild(article)

            //clear the values
            firstNameInput.value = '' 
            lastNameInput.value = '' 
            fromDateInput.value = ''
            daysCountInput.value = ''
            peopleCountInput.value = '' 
            //disable the next buttn
            nextButton.disabled = true

            //make edit and continue buttons
            const btnArticle = document.createElement('li')

            const editBtn = document.createElement('button')
            editBtn.textContent = 'Edit'
            editBtn.addEventListener('click', editClicked)
            editBtn.classList = 'edit-btn'
            btnArticle.appendChild(editBtn)

            const continueBtn = document.createElement('button')
            continueBtn.textContent = 'Continue'
            continueBtn.addEventListener('click', continueClicked)
            continueBtn.classList = 'continue-btn'
            btnArticle.appendChild(continueBtn)
            ticketInfoList.appendChild(btnArticle)

            //functions for the buttons to listen
            function editClicked(){
                //return the values of the input fields
                const separatedName = fullName.textContent.split(' ')
                firstNameInput.value = separatedName[0]
                lastNameInput.value = separatedName[1]
                fromDateInput.value = date.textContent
                daysCountInput.value = duration.textContent
                peopleCountInput.value = people.textContent

                //enable the next button
                nextButton.disabled = false
                //delete everything from the column
                const ticketInfoArticle = editBtn.parentElement.previousSibling
                const buttonArticle = editBtn.parentElement
                ticketInfoList.removeChild(ticketInfoArticle)
                ticketInfoList.removeChild(buttonArticle)
                }
            function continueClicked(){
                // create new article element            
                let confirmlLocation = document.querySelector('.confirm-ticket')
                //append the last article  info to it
                confirmlLocation.appendChild(article)
                
                  // create Confirm and Cancel buttons and append to confirm ticket
                const confirmBtnArticle = document.createElement('li')
                const confirmBtn = document.createElement('button')
                confirmBtn.textContent = 'Confirm'
                confirmBtn.classList = 'confirm-btn'
                confirmBtn.addEventListener('click', confirmClicked)
                confirmBtnArticle.appendChild(confirmBtn)

                const cancelBtn = document.createElement('button')
                cancelBtn.textContent = 'Cancel'
                cancelBtn.classList = 'cancel-btn'
                cancelBtn.addEventListener('click', cancelClicked)
                confirmBtnArticle.appendChild(cancelBtn)

                confirmlLocation.appendChild(confirmBtnArticle)

            
            
            //delete everything from the review column
            const ticketInfoArticle = editBtn.parentElement.previousSibling
            const buttonArticle = editBtn.parentElement
            ticketInfoList.removeChild(ticketInfoArticle)
            ticketInfoList.removeChild(buttonArticle)

            }
            function confirmClicked() {
                // Remove the ticket info and buttons from the page
                const mainDiv = document.querySelector('#main')
                mainDiv.remove()
              
                const body = document.getElementById('body')
                // Create the thank you message
                const thankYouHeading = document.createElement('h1')
                thankYouHeading.id = 'thank-you'
                thankYouHeading.textContent = 'Thank you, have a nice day!'
                body.appendChild(thankYouHeading)
              
                // Create the back button
                const backButton = document.createElement('button')
                backButton.id = 'back-btn'
                backButton.textContent = 'Back'
                body.appendChild(backButton)
                backButton.addEventListener('click', backClicked)
              }
              
              function backClicked(){
                document.location.reload();
              }
            function cancelClicked() {
                const confirmLocation = document.querySelector('.confirm-ticket')
                while (confirmLocation.firstChild) {
                  confirmLocation.removeChild(confirmLocation.firstChild)
                }
              }
            
        }
    })
}
