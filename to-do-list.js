let taskArray = [];
const $input = document.querySelector('input');
const $button = document.querySelector('.add-list-item');
const $taskList = document.querySelector('.task-list');

$button.addEventListener('click', whenButtonClick);


function whenButtonClick() {

	taskArray.push($input.value);
	console.log(taskArray);

	let $listItem = document.createElement("li");
	let $listText = document.createElement("p");
	let $deleteButton = document.createElement("button");
	let $editButton = document.createElement("button");

	$listText.innerText = $input.value;
  $listText.classList.add("task-list__item-name");
	$deleteButton.innerText = "Delete";
	$editButton.innerText = "Edit";
	$taskList.append($listItem);
  $listItem.classList.add("task-list__item");
	$listItem.append($listText);
	$listItem.append($deleteButton);
	$listItem.append($editButton);

	$deleteButton.addEventListener('click', deleteItem);
	$editButton.addEventListener('click', editItem);

}


function deleteItem(event) {
  // finding the listItem HTML <li> tag.
  const $selectedTask = event.path[1];
  console.log(event);
  // accessing the text of the listItem. firstElementChild = <p></p>
  const selectedTaskName = event.path[1].firstElementChild.innerHTML;
  // removing the listItem from the DOM. parentNode = <li></li>
  $selectedTask.parentNode.removeChild($selectedTask);
  // finding the index of $selectedTaskToDelete in taskArray
  let index = taskArray.indexOf(selectedTaskName);
  // splicing this string out of taskArray by it's index. Second parameter states how many to remove.
  taskArray.splice(index, 1);
}

function editItem(event) {
	const $selectedTask = event.path[1];
  const $selectedTaskText = $selectedTask.firstElementChild;
	let selectedTaskName = $selectedTaskText.innerText;

	// $selectedTaskToEditHTML.parentNode.removeChild($selectedTaskToEditHTML);
  $selectedTask.classList.add("hide");

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
    $selectedTaskText.innerText = updatedTaskName;
    $selectedTask.classList.remove("hide");
    $editListItem.parentNode.removeChild('task-list__edit-item');
    // selectedTaskName = updatedTaskName;

  });

	// $editListItem.append($editListText);




}
