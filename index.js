let todoList = [];
const inputTodo = document.getElementById('todoInput');
const buttonAdd = document.getElementById('addTodoButton');

buttonAdd.addEventListener('click', () => {
    const todoText = inputTodo.value.trim();
    if (todoText) {
        todoList.push(todoText);
        inputTodo.value = '';
        renderTodoList();
    }
});

function renderTodoList() {
    const todoContainer = document.getElementById('todoList');
    todoContainer.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'list-group-item d-flex justify-content-between align-items-center';

        const todoText = document.createElement('span');
        todoText.textContent = todo;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });

        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);
        todoContainer.appendChild(todoItem);
    });
}