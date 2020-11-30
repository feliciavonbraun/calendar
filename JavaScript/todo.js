/* Global scope */
let todos = [];
let todoId = 0;



/* Start function */
function todo() {   
    addEventListeners()
}

/* All event listeners */
function addEventListeners(){
    document.getElementById('create-new-todo-button').addEventListener('click', showNextPage); 
    document.getElementById('cancel-new-todo-button').addEventListener('click', showNextPage);
    document.getElementById('save-new-todo-button').addEventListener('click', showNextPage);
    document.getElementById('save-new-todo-button').addEventListener('click', createNewTodo);
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
    } else if (clickedButton.id == 'save-new-todo-button') {
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


/* FORM */

function createNewTodo(){
    const todoTitle = document.getElementById('title').value;
    const todoDate = document.getElementById('date').value;
    const todoTime = document.getElementById('time').value;
    const todoNotes = document.getElementById('notes').value;

    const todo = {
        title: todoTitle,
        date: todoDate,
        time: todoTime,
        notes: todoNotes,
        todoId: todoId
    };

    todos.push(todo);
    todoId = todoId + 1


    renderTodoList();
    renderCalendar(); /* Render from calender js. Ignorera för tillfället*/
    clearForm();
}

function renderTodoList() {
    const container = document.getElementById('todo-container');
    container.innerHTML = "";

    for(const todo of todos) {
        const newTodo = document.createElement('div');
        newTodo.classList.add('each-todo-container', 'grid');

        /* Time */
        const timeContainer = document.createElement('div');
        timeContainer.classList.add('todo-time', 'grid');

        const titleTime = document.createElement('p');
        titleTime.innerHTML = todo.time;

        /* Title, Date, Notes */
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('todo-information', 'grid');

        const titleText = document.createElement('p');
        titleText.classList.add('bold');
        titleText.innerHTML = todo.title;

        const titleDate = document.createElement('p');
        titleDate.innerHTML = todo.date;

        const titleNotes = document.createElement('p');
        titleNotes.innerHTML = todo.notes;

        /* Delete Button */
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', deleteTodo);

        const deleteText = document.createElement('p');
        deleteText.innerHTML = 'X'

        function deleteTodo() {
            const div = this.parentElement;
            div.style.display = "none";
            todos = todos.filter(abc => abc.todoId !== todo.todoId)
        }


        /* Append form elements */
        container.appendChild(newTodo);
        newTodo.appendChild(timeContainer);
        timeContainer.appendChild(titleTime);

        newTodo.appendChild(titleContainer);
        titleContainer.appendChild(titleText);
        titleContainer.appendChild(titleDate);
        titleContainer.appendChild(titleNotes);

        newTodo.appendChild(deleteButton);
        deleteButton.appendChild(deleteText);
    }
}

/* Clear form */
function clearForm(){
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('notes').value = '';
}




