// Global variables

const button = document.getElementById("taskButton");
const inputField = document.getElementById("taskInput");
let taskListDiv = document.getElementById("tasksList")
let taskArray = [];


// Events

// when clicked adds task to the task list
button.addEventListener('click', addTaskToTheList);

// when enter key is press adds task to the task list
inputField.addEventListener('keypress', addTaskToTheListFromKeyPress);

 


// Functions

function addTaskToTheList () { // Adds task to the list
    if(inputField.value) { // Check that input is not empty

    taskArray.push(inputField.value);

    // Create a list item that will contain a span and a checkbox
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

    // when checkbox clicked cross out task
    const checkbox = document.querySelector("#tasksList > li > input");
    checkbox.addEventListener('change', crossDoneTask);

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
    if(this.checked) {
    this.previousElementSibling.classList.add('crossedTask');
    let doneTag = document.createElement('p')
    this.replaceWith(doneTag);
    doneTag.setAttribute("id","doneTag");
    doneTag.innerHTML = "DONE"
   } else {
    this.previousElementSibling.classList.remove('crossedTask'); 
    document.getElementById("doneTag").remove(doneTag);
   }  
}