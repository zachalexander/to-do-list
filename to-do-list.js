let taskArray = [];
const $input = document.querySelector('input');
const $addButton = document.querySelector('.add-list-item');
const $taskList = document.querySelector('.task-list');

$addButton.addEventListener('click', addItem);

function addItem() {
	// UI
	// create elements
	let $listItem = document.createElement("li");
	let $listText = document.createElement("p");
	let $deleteButton = document.createElement("button");
	let $editButton = document.createElement("button");
	
	// add classes
	$listItem.classList.add("task-list__item");
  	$listText.classList.add("task-list__item-name");
	$deleteButton.classList.add("task-list__delete-button");
	$editButton.classList.add("task-list__edit-button");
	
	// add innerText to elements
	$listText.innerText = $input.value;
	$deleteButton.innerText = "Delete";
	$editButton.innerText = "Edit";
	
	// adding EventListeners
	$deleteButton.addEventListener('click', deleteItem);
	$editButton.addEventListener('click', editItem);
	
	// appending elements to DOM
	$taskList.append($listItem);
	$listItem.append($listText);
	$listItem.append($deleteButton);
	$listItem.append($editButton);
	
	// STATE
	taskArray.push($input.value);
	console.log(taskArray);

}

function deleteItem(event) {
	// UI
	const $selectedTask = event.target;
	const $listItem = $selectedTask.parentNode;
	const taskToDelete = $listItem.querySelector('.task-list__item-name').innerText;
	$selectedTask.parentNode.remove('task-list__item');
	
	// STATE
	let index = taskArray.indexOf(taskToDelete);
	taskArray.splice(index, 1);
	console.log(taskArray);
}

function editItem(event) {

	// UI
	// hide element we are editing
	const $selectedTask = event.target;
	const $listItem = $selectedTask.parentNode;
	$listItem.classList.add("hide");
	
	// create elements
	let $editListItem = document.createElement("li");
	let $editListInput = document.createElement("input");
	let $editListButton = document.createElement("button");

	// add class names
	$editListItem.classList.add("task-list__edit-item");
	$editListInput.classList.add("task-list__edit-input");
	$editListButton.classList.add("task-list__edit-button");
	
	// add innerText to elements
	const $taskToEdit = $listItem.querySelector('.task-list__item-name');
	const task = $taskToEdit.innerText;
	$editListInput.value = task;

	$editListButton.innerText = "Save";
	
	// add EventListeners
	$editListButton.addEventListener('click', function(){
		// update and show the element that we are editing
		const inputValue = $editListInput.value;
		$taskToEdit.innerText = inputValue;
		$listItem.classList.remove("hide");

		// remove edit box from UI
		const test = $editListItem.parentElement.removeChild($editListItem);

		// STATE
		let index = taskArray.indexOf(task);
		taskArray[index] = inputValue;
		console.log(taskArray);
	});

	
	// appending elements to DOM
	$taskList.append($editListItem);
	$editListItem.append($editListInput);
  $editListItem.append($editListButton);
}
