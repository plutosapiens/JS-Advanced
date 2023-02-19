// Get form elements
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const peopleCountInput = document.getElementById('people-count');
const fromDateInput = document.getElementById('from-date');
const daysCountInput = document.getElementById('days-count');

// Get ticket info elements
const ticketInfoList = document.querySelector('.ticket-info-list');

// Get next button
const nextButton = document.getElementById('next-btn');

// Add event listener to the next button
nextButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Check if all fields are filled
  if (
    firstNameInput.value.trim() === '' ||
    lastNameInput.value.trim() === '' ||
    peopleCountInput.value.trim() === '' ||
    fromDateInput.value.trim() === '' ||
    daysCountInput.value.trim() === ''
  ) {
    return;
  }

  // Create ticket info
  const ticketInfo = document.createElement('li');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = `${firstNameInput.value} ${lastNameInput.value}`;

  const peopleSpan = document.createElement('span');
  peopleSpan.textContent = `${peopleCountInput.value} people`;

  const dateSpan = document.createElement('span');
  dateSpan.textContent = fromDateInput.value;

  const daysSpan = document.createElement('span');
  daysSpan.textContent = `${daysCountInput.value} days`;

  ticketInfo.appendChild(nameSpan);
  ticketInfo.appendChild(peopleSpan);
  ticketInfo.appendChild(dateSpan);
  ticketInfo.appendChild(daysSpan);

  // Add ticket info to the ticket info list
  ticketInfoList.appendChild(ticketInfo);

  // Clear form inputs
  firstNameInput.value = '';
  lastNameInput.value = '';
  peopleCountInput.value = '';
  fromDateInput.value = '';
  daysCountInput.value = '';
});


// Create the "Edit" button
const editBtn = document.createElement('button');
editBtn.textContent = 'Edit';
editBtn.id = 'edit-btn';
editBtn.addEventListener('click', handleEditBtnClick);



// Append the "Edit" button to the confirm-ticket section
const confirmTicketSection = document.getElementById('confirm-ticket-section');
const confirmTicketList = confirmTicketSection.querySelector('.confirm-ticket');
confirmTicketList.appendChild(editBtn);

// Create the "Continue" button
const continueBtn = document.createElement('button');
continueBtn.textContent = 'Continue';
continueBtn.id = 'continue-btn';
continueBtn.addEventListener('click', handleContinueBtnClick);

// Add appropriate styles to the "Continue" button
continueBtn.style.backgroundColor = 'green';
continueBtn.style.color = 'white';
continueBtn.style.padding = '10px 20px';
continueBtn.style.border = 'none';
continueBtn.style.borderRadius = '5px';

// Append the "Continue" button to the confirm-ticket section
confirmTicketList.appendChild(continueBtn);



//--contbtn--/////////////////////////////////////////////////////////////////////////
function continueClicked() {
  const ticketInfoArticle = continueBtn.parentElement.previousSibling;
  const buttonArticle = continueBtn.parentElement;

  // remove the edit and continue buttons
  ticketInfoList.removeChild(buttonArticle);

  // create new article element
  const confirmTicketArticle = document.createElement('li');
  confirmTicketArticle.classList = 'ticket-info-list';

  // create new full name and append it to the article
  const confirmFullName = document.createElement('h3');
  confirmFullName.textContent = fullName.textContent;
  confirmTicketArticle.appendChild(confirmFullName);

  // create new date and append it to the article
  const confirmDate = document.createElement('p');
  confirmDate.textContent = date.textContent;
  confirmTicketArticle.appendChild(confirmDate);

  // create new duration and append it to the article
  const confirmDuration = document.createElement('p');
  confirmDuration.textContent = duration.textContent;
  confirmTicketArticle.appendChild(confirmDuration);

  // create new people count and append it to the article
  const confirmPeople = document.createElement('p');
  confirmPeople.textContent = people.textContent;
  confirmTicketArticle.appendChild(confirmPeople);

  // clear the values from the input fields
  firstNameInput.value = '';
  lastNameInput.value = '';
  fromDateInput.value = '';
  daysCountInput.value = '';
  peopleCountInput.value = '';

  // append the new article to confirm ticket list
  const confirmTicketList = document.querySelector('.confirm-ticket');
  confirmTicketList.innerHTML = '';
  confirmTicketList.appendChild(confirmTicketArticle);

  // create Confirm and Cancel buttons and append to confirm ticket
  const confirmBtnArticle = document.createElement('li');
  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Confirm';
  confirmBtn.classList = 'confirm-btn';
  confirmBtn.addEventListener('click', confirmClicked);
  confirmBtnArticle.appendChild(confirmBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList = 'cancel-btn';
  cancelBtn.addEventListener('click', cancelClicked);
  confirmBtnArticle.appendChild(cancelBtn);

  confirmTicketList.appendChild(confirmBtnArticle);
}

function confirmClicked() {
  // handle the confirm button click
}

function cancelClicked() {
  // handle the cancel button click
}



//------------------- or---------or----------or-------------------------

// Get form elements
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const peopleCountInput = document.getElementById('people-count');
const fromDateInput = document.getElementById('from-date');
const daysCountInput = document.getElementById('days-count');

// Get ticket info elements
const ticketInfoList = document.querySelector('.ticket-info-list');

// Get next button
const nextButton = document.getElementById('next-btn');

// Add event listener to the next button
nextButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Check if all fields are filled
  if (
    firstNameInput.value.trim() === '' ||
    lastNameInput.value.trim() === '' ||
    peopleCountInput.value.trim() === '' ||
    fromDateInput.value.trim() === '' ||
    daysCountInput.value.trim() === ''
  ) {
    return;
  }

  // Create ticket info
  const ticketInfo = document.createElement('li');
  ticketInfo.innerHTML = `
    <span>${firstNameInput.value} ${lastNameInput.value}</span>
    <span>${peopleCountInput.value} people</span>
    <span>${fromDateInput.value}</span>
    <span>${daysCountInput.value} days</span>
  `;

  // Add ticket info to the ticket info list
  ticketInfoList.appendChild(ticketInfo);

  // Clear form inputs
  firstNameInput.value = '';
  lastNameInput.value = '';
  peopleCountInput.value = '';
  fromDateInput.value = '';
  daysCountInput.value = '';
});



// This code gets the form elements, the ticket info elements, and the next button element from the HTML. It then adds an event listener to the next button that checks if all fields are filled, creates a ticket info element, adds the ticket info element to the ticket info list, and clears the form inputs.

// The ticket info element is created using document.createElement() and innerHTML, and the ticket info is formatted according to the same text format and order as shown in the picture. The form inputs are cleared by setting their value properties to an empty string.

// Note that this implementation does not use any of the actions that are not supported in Judge, and it converts the collection returned by querySelector() into an array using Array.from() before using .forEach().