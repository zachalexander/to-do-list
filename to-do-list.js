

let taskArray = [];

// function addTask(str) {
//   taskArray.push(str);
//   return taskArray;
// }

function whenButtonClick() {
  let input = document.getElementById('input').value;
  taskArray.push(input);
  console.log(taskArray);
  // let output = addTask(getInput);
  // console.log(output);
  // return output;
}

// let input = whenButtonClick();
// console.log(input);

// document.getElementById("myList").innerHTML = whenButtonClick();

//add event listener (pass the click and callback function)
