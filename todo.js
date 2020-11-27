/* Start function */
function todo() {
    getButtonElements();
}

/* Get button elements from Html */
function getButtonElements() {
    const createNewTodoButton = document.getElementById('create-new-todo-button');
    //const saveNewTodoButton = document.getElementById('save-new-todo-button');
    const cancelNewTodoButton = document.getElementById('cancel-new-todo-button');
    
    handleButtonClick(createNewTodoButton, cancelNewTodoButton);   
}

/* Event listeners for buttons */
function handleButtonClick(createNewTodoButton, cancelNewTodoButton) {
    createNewTodoButton.addEventListener('click', showNextPage);
    cancelNewTodoButton.addEventListener('click', showNextPage);
    //saveNewTodoButton.addEventListener('click', showNextPage); 
}

/* Show next page (display) */
function showNextPage(event) {
    const todoPage = Array.from(document.getElementsByClassName('todo-page'));
    const newTodoPage = Array.from(document.getElementsByClassName('new-todo-page'));
    
    const clickedButton = event.target;   

    if (clickedButton.id == 'create-new-todo-button'){
        newTodoPage.forEach(showPage)
        todoPage.forEach(hidePage)
    } else if (clickedButton.id == 'cancel-new-todo-button') {
        todoPage.forEach(showPage); 
        newTodoPage.forEach(hidePage)
    }   
}

/* Show element */
function showPage(element) {
    element.style.display = 'unset';
}

/* Hide element */
function hidePage(element) {
    element.style.display = 'none';
}