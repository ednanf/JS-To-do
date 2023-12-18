// Element selection
const todoForm = document.querySelector('#form-todo');
const todoInput = document.querySelector('#input-todo');
const todoList = document.querySelector('#todo-list');

const editForm = document.querySelector('#form-edit');
const editInput = document.querySelector('#input-edit');
const cancelEditBtn = document.querySelector('#button-cancel-edit');

const searchInput = document.querySelector('#input-search');
const clearSearchBtn = document.querySelector('#button-erase');
const filterSelector = document.querySelector('#select-filter');

let oldInputValue; // stores input for editing

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
	let todoTitle;

	// Ensures the task exist
	if (parentElement && parentElement.querySelector('h3')) {
		todoTitle = parentElement.querySelector('h3').innerText;
	}

	if (targetElement.classList.contains('button-complete-todo')) {
		parentElement.classList.toggle('done');
	}

	if (targetElement.classList.contains('button-delete-todo')) {
		parentElement.remove();
	}

	if (targetElement.classList.contains('button-edit-todo')) {
		toggleForms();

		editInput.value = todoTitle;
		oldInputValue = todoTitle;
	}
});

cancelEditBtn.addEventListener('click', (e) => {
	e.preventDefault();

	toggleForms();
});

editForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const editInputValue = editInput.value;

	if (editInputValue) {
		updateTodo(editInputValue);
	}

	toggleForms();
});

searchInput.addEventListener('keyup', (e) => {
	const query = e.target.value;
	searchTodos(query);
});

// Functions
const saveTodo = (text) => {
	const todo = document.createElement('div');
	todo.classList.add('todo');

	const todoTitle = document.createElement('h3');
	todoTitle.innerText = text;
	todo.appendChild(todoTitle);

	const doneBtn = document.createElement('button');
	doneBtn.classList.add('button-complete-todo');
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

const updateTodo = (text) => {
	const todos = document.querySelectorAll('.todo');

	todos.forEach((todo) => {
		let todoTitle = todo.querySelector('h3');

		if (todoTitle.innerText === oldInputValue) {
			todoTitle.innerText = text;
		}
	});
};

const toggleForms = () => {
	editForm.classList.toggle('hide');
	todoForm.classList.toggle('hide');
	todoList.classList.toggle('hide');
};

const searchTodos = (query) => {};
