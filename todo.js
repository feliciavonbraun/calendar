function todo() {
    getTodoButton();
    getCancelButton();
}

function getTodoButton() { 
    document.getElementById('create-todo-button').addEventListener('click', showAddTodoPage);
}

function showAddTodoPage() { 
    const showTodos = document.getElementById("show-todos");
    const createTodos = document.getElementById("create-todo");
    const createTodoButton = document.getElementById("create-todo-button");
    const cancelTodoButton = document.getElementById("cancel-todo-button");
    const addTodoButton = document.getElementById("add-todo-button");

    showTodos.style.display = 'none';
    createTodos.style.display = 'unset';
    createTodoButton.style.display = 'none';
    cancelTodoButton.style.display = 'unset';
    addTodoButton.style.display = 'unset';
}


function getCancelButton() {
    document.getElementById('cancel-todo-button').addEventListener('click', showTodoPage);
}

function showTodoPage() {
    const showTodos = document.getElementById("show-todos");
    const createTodos = document.getElementById("create-todo");
    const createTodoButton = document.getElementById("create-todo-button");
    const cancelTodoButton = document.getElementById("cancel-todo-button");
    const addTodoButton = document.getElementById("add-todo-button");

    showTodos.style.display = 'unset';
    createTodos.style.display = 'none';
    createTodoButton.style.display = 'unset';
    cancelTodoButton.style.display = 'none';
    addTodoButton.style.display = 'none';
}


document.getElementById('add-todo-button').addEventListener('submit', newTodo).value;

function newTodo() {

} 







    

    

  