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

	$listText.innerText = $input.value;
	$deleteButton.innerText = "Delete";
	$taskList.append($listItem);
	$listItem.append($listText);
	$listItem.append($deleteButton);

	$deleteButton.addEventListener('click', deleteItem);

}

function deleteItem(event) {

  console.log(event.path[1]);
  // finding the listItem HTML <li> tag.
  const $selectedTaskToDeleteHtml = event.path[1];
  // accessing the text of the listItem. firstElementChild = <p></p>
  const $selectedTaskToDelete = event.path[1].firstElementChild.innerHTML;
  // removing the listItem from the DOM. parentNode = <li></li>
  $selectedTaskToDeleteHtml.parentNode.removeChild($selectedTaskToDeleteHtml);
  // finding the index of $selectedTaskToDelete in taskArray
  let a = taskArray.indexOf($selectedTaskToDelete);
  // splicing this string out of taskArray by it's index. Second parameter states how many to remove.
  taskArray.splice(a, 1);
  console.log(taskArray);

}
// let input = whenButtonClick();
// console.log(input);

// document.getElementById("myList").innerHTML = whenButtonClick();

//add event listener (pass the click and callback function)

//event.target browser gives a way to interact with DOM and point to specific thing
