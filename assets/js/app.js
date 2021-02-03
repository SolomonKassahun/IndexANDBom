// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
var input, insensitivity,ul,li,i,liValue,txtValue;
// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);





// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);




}





// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}



// Filter tasks function definition 
function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */
   //Method One
   
    input = document.getElementById('filter')
    upperCaseletter = input.value.toUpperCase()
    ul = document.querySelector('.collection')
    li = ul.getElementsByTagName('li')
    
    for (i = 0; i < li.length; i++) {
        liValue = li[i]  
        txtValue = liValue.textContent || liValue.innerText
        if(txtValue.toUpperCase().indexOf(upperCaseletter) > -1){
            li[i].style.display = "block"
        }else{
            li[i].style.display = "none"
        }
    }

}
   /* Method two
    var userInput = document.getElementById("filter").value;
    lists = document.getElementById("unique").value;
    for(var i =0; i < lists.length; i++){
        if (userInput == lists[i]){
            document.getElementById("unique").style.display = "block";
        } else{
            document.getElementById("unique").style.display = "none";
        }
    }
} */
// ascending order
function ascending(){
    var ul = document.querySelector('.collection')
    var i = ul.childNodes.length
    
    while(i--){
    
        ul.appendChild(ul.childNodes[i])
    }
}
function descending(){
    var ul = document.querySelector('.collection')
    var i = ul.childNodes.length
    
    while(i--){
    
        ul.appendChild(ul.childNodes[i])
    }
}


function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.querySelector(".collection");
    condition = true;
    while (condition) {
    condition = false
      liValues = list.getElementsByTagName("LI");
      for (i = 0; i < (liValues.length - 1); i++) {
        shouldSwitch = false;
        if (liValues[i].innerHTML.toLowerCase() > liValues[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        liValues[i].parentNode.insertBefore(liValues[i + 1], liValues[i]);
        switching = true;
      }
    }
  }
// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

        }

    }
}


