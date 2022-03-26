// Global variables

const button = document.getElementById("taskButton");
const inputField = document.getElementById("taskInput");
const checkbox = document.getElementsByClassName("checkbox");
console.log(checkbox)
let taskListDiv = document.getElementById("tasksList")
let taskArray = [];


// Events

// when clicked adds task to the task list
button.addEventListener('click', addTaskToTheList);

// when enter key is press adds task to the task list
inputField.addEventListener('keypress', addTaskToTheListFromKeyPress);

// when clicked task is crossed out
checkbox.addEventListener('click', crossDoneTask)


// Functions

function addTaskToTheList () { // Adds task to the list
    if(inputField.value) { // Check that input is not empty

    taskArray.push(inputField.value);

    // Create a list item, a span and a checkbox
    let taskEntry = document.createElement('li')
    let taskText = document.createElement('span');
    let taskCheckbox = document.createElement('input');

    // specify the input as a checkbox
    taskCheckbox.setAttribute("type", "checkbox"); 


    // set the inner HTML of the new task
    let newEntry = taskArray[taskArray.length-1]
    taskText.innerHTML = newEntry;

    // adds class to the new li and new checkbox
    taskEntry.classList.add("newTaskEntry");
    taskCheckbox.classList.add("checkbox");

    // append the new task in the ul
    taskListDiv.append(taskEntry);
    taskEntry.append(taskText);
    taskEntry.append(taskCheckbox);

    // clear input
    
    inputField.value = '';
    
    } 
}

// Adds task to the list with the enter key press
function addTaskToTheListFromKeyPress(event) {
    if (event.keyCode === 13) { 
        event.preventDefault();
        addTaskToTheList();
    }
}



function crossDoneTask(event) {
    if(this.checked){
        this.previousElementSibling.classList.add('crossedTask');
    }

}