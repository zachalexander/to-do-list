let taskArray = ['go to store', 'buy groceries', 'exercise', 'call mom'];
const $input = document.querySelector('input');
const $addButton = document.querySelector('.input__add-btn');
const $taskList = document.querySelector('.task-list');

$addButton.addEventListener('click', addItem);

// UI UPDATES

taskArray.forEach(function(task) {
	createElement(task);
});

function createElement(taskName) {
	// create elements
	let $listItem = document.createElement("li");
	let $listWrapper = document.createElement("div");
	let $listText = document.createElement("p");
	let $deleteButton = document.createElement("button");
	let $editButton = document.createElement("button");

	// add classes
	$listItem.classList.add("task-list__item");
	$listWrapper.classList.add("task-list__item-wrapper")
	$listText.classList.add("task-list__item-name");
	$deleteButton.classList.add("btn", "btn--delete-item");
	$editButton.classList.add("btn", "btn--edit-item");

	// add innerText to elements
	$listText.innerText = taskName;
	$deleteButton.innerText = "Delete";
	$editButton.innerText = "Edit";

	// adding EventListeners
	$deleteButton.addEventListener('click', deleteItem);
	$editButton.addEventListener('click', editItem);

	// appending elements to DOM
	$taskList.append($listItem);
	$listItem.append($listWrapper)
	$listWrapper.append($listText);
	$listWrapper.append($deleteButton);
	$listWrapper.append($editButton);
}



// USER INTERACTION

function addItem() {
	const taskName = $input.value;
	createElement(taskName);
	
	// STATE
	taskArray.push($input.value);
}

function deleteItem(event) {
	// UI
	const $listItem = event.target.closest('.task-list__item');
	const taskToDelete = $listItem.querySelector('.task-list__item-name').innerText;
	$taskList.removeChild($listItem);
	
	// STATE
	let index = taskArray.indexOf(taskToDelete);
	taskArray.splice(index, 1);
}

function editItem(event) {
	// UI
	const $listItem = event.target.closest('.task-list__item')
	const $listWrapper = event.target.closest('.task-list__item-wrapper');
	$listWrapper.classList.add("hide");
	
	// create elements
	let $editListItem = document.createElement("li");
	let $editListInput = document.createElement("input");
	let $editListButton = document.createElement("button");

	// add class names
	$editListItem.classList.add("task-list__edit--item");
	$editListInput.classList.add("task-list__edit--input");
	$editListButton.classList.add("btn", "btn--edit-item");
	
	// add innerText to elements
	const $taskToEdit = $listWrapper.querySelector('.task-list__item-name');
	const task = $taskToEdit.innerText;
	$editListInput.value = task;

	$editListButton.innerText = "Save";
	
	// add EventListeners
	$editListButton.addEventListener('click', function(){
		// update and show the element that we are editing
		const inputValue = $editListInput.value;
		$taskToEdit.innerText = inputValue;
		$listWrapper.classList.remove("hide");

		// remove edit box from UI
		$listItem.removeChild($editListItem);

		// // STATE
		let index = taskArray.indexOf(task);
		taskArray[index] = inputValue;
	});

	// appending elements to DOM
	$listItem.append($editListItem);
	$editListItem.append($editListInput);
  $editListItem.append($editListButton);
}
