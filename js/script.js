// Element selection
const todoForm = document.querySelector('#form-todo');
const todoInput = document.querySelector('#input-todo');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#form-edit');
const editInput = document.querySelector('#input-edit');
const cancelEditBtn = document.querySelector('#button-cancel-edit');

// Functions
const saveTodo = (text) => {
	const todo = document.createElement('div');
	todo.classList.add('todo');

	const todoTitle = document.createElement('h3');
	todoTitle.innerText = text;
	todo.appendChild(todoTitle);

	const doneBtn = document.createElement('button');
	doneBtn.classList.add('button-finish-todo');
	doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
	todo.appendChild(doneBtn);

	const editBtn = document.createElement('button');
	editBtn.classList.add('button-edit-todo');
	editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
	todo.appendChild(editBtn);

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('button-delete-todo');
	deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
	todo.appendChild(deleteBtn);

	todoList.appendChild(todo);

	todoInput.value = '';
	todoInput.focus();
};

// Events
todoForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const inputValue = todoInput.value;

	if (inputValue) {
		saveTodo(inputValue);
	}
});

document.addEventListener('click', (e) => {
	const targetElement = e.target;
	const parentElement = targetElement.closest('div');

	if (targetElement.classList.contains('button-finish-todo')) {
		parentElement.classList.toggle('done');
	}

	if (targetElement.classList.contains('button-delete-todo')) {
		parentElement.remove();
	}
});
