let taskArray = [];
const $input = document.getElementById('input');
const $button = document.querySelector('.add-list-item');
const $taskList = document.querySelector('.task-list');

$button.addEventListener('click', whenButtonClick);


function whenButtonClick() {

	taskArray.push($input.value);
	console.log('from inside when button click', taskArray);

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
	console.log(event.target);
}
// let input = whenButtonClick();
// console.log(input);

// document.getElementById("myList").innerHTML = whenButtonClick();

//add event listener (pass the click and callback function)

//event.target browser gives a way to interact with DOM and point to specific thing