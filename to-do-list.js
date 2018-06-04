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
	$deleteButton.innerText = "Delete";
	$editButton.innerText = "Edit";
	$taskList.append($listItem);
	$listItem.append($listText);
	$listItem.append($deleteButton);
	$listItem.append($editButton);

	$deleteButton.addEventListener('click', deleteItem);
	$editButton.addEventListener('click', editItem);

}


function deleteItem(event) {
  // finding the listItem HTML <li> tag.
  const $selectedTaskToDeleteHtml = event.path[1];
  // accessing the text of the listItem. firstElementChild = <p></p>
  const $selectedTaskToDelete = event.path[1].firstElementChild.innerHTML;
  // removing the listItem from the DOM. parentNode = <li></li>
  $selectedTaskToDeleteHtml.parentNode.removeChild($selectedTaskToDeleteHtml);
  // finding the index of $selectedTaskToDelete in taskArray
  let index = taskArray.indexOf($selectedTaskToDelete);
  // splicing this string out of taskArray by it's index. Second parameter states how many to remove.
  taskArray.splice(index, 1);
  console.log(taskArray);
}

function editItem(event) {
	const $selectedTaskToEditHTML = event.path[1];
	const $selectedTaskToEdit = event.path[1].firstElementChild.innerHTML;
	console.log($selectedTaskToEdit);

	$selectedTaskToEditHTML.parentNode.removeChild($selectedTaskToEditHTML);

	let $editListItem = document.createElement("li");
	let $editListInput = document.createElement("INPUT");
	// let $editListText = document.createElement("p");

	$taskList.append($editListItem);
	$editListItem.append($editListInput);
	
	// $editListItem.append($editListText);




}
