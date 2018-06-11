let taskArray = [];
const $input = document.querySelector('input');
const $button = document.querySelector('.add-list-item');
const $taskList = document.querySelector('.task-list');

$button.addEventListener('click', whenButtonClick);


function whenButtonClick() {

	taskArray.push($input.value);

	let $listItem = document.createElement("li");
	let $listText = document.createElement("p");
	let $deleteButton = document.createElement("button");
	let $editButton = document.createElement("button");

	$listText.innerText = $input.value;
  $listText.classList.add("task-list__item-name");
	$deleteButton.innerText = "Delete";
	$deleteButton.classList.add("task-list__delete-button");
	$editButton.innerText = "Edit";
	$editButton.classList.add("task-list__edit-button");
	$taskList.append($listItem);
  $listItem.classList.add("task-list__item");
	$listItem.append($listText);
	$listItem.append($deleteButton);
	$listItem.append($editButton);

	$deleteButton.addEventListener('click', deleteItem);
	$editButton.addEventListener('click', editItem);

}


function deleteItem(event) {
  const $selectedTask = event.target;
  const selectedTaskParent = $selectedTask.parentNode;
	const taskToDelete = selectedTaskParent.querySelector('.task-list__item-name').innerText;
  $selectedTask.parentNode.remove('task-list__item');
  let index = taskArray.indexOf(taskToDelete);
  taskArray.splice(index, 1);
}

function editItem(event) {
	const $selectedTask = event.target;
	const selectedTaskParent = $selectedTask.parentNode;
	let selectedTaskName = $selectedTask.innerText;



	// $selectedTaskToEditHTML.parentNode.removeChild($selectedTaskToEditHTML);
  selectedTaskParent.classList.add("hide");


// start from here...
	let $editListItem = document.createElement("li");
  $editListItem.classList.add("task-list__edit-item");
	let $editListInput = document.createElement("input");
  let $editListButton = document.createElement("button");
	// let $editListText = document.createElement("p");

	$taskList.append($editListItem);
	$editListItem.append($editListInput);
  $editListItem.append($editListButton);
  $editListButton.innerText = "Edit";

  $editListInput.value = selectedTaskName;

  $editListButton.addEventListener('click', function() {
    const updatedTaskName = $editListInput.value;
    console.log($selectedTask);
    selectedTaskName.innerText = updatedTaskName;
    selectedTaskParent.classList.remove("hide");
    $editListItem.parentNode.removeChild('task-list__edit-item');
    // selectedTaskName = updatedTaskName;

  });

	// $editListItem.append($editListText);




}
