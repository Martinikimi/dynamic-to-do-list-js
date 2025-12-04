// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // 'false' indicates not to save again to Local Storage
        });
    }
    
    // Function to add a new task to the list
    // The 'save' parameter controls whether to save to Local Storage
    function addTask(taskText, save = true) {
        // Get the task text - either from parameter or input field
        const actualTaskText = typeof taskText === 'string' ? taskText : taskInput.value.trim();
        
        // Check if taskText is not empty ("")
        if (actualTaskText === "") {
            // If it is empty, use alert to prompt the user to enter a task
            alert("Please enter a task!");
            return;
        }
        
        // If taskText is not empty, proceed to add the task
        // Create a new li element
        const listItem = document.createElement('li');
        // Set its textContent to taskText
        listItem.textContent = actualTaskText;
        
        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        // Set its textContent to "Remove"
        removeButton.textContent = "Remove";
        // Give it a class name of 'remove-btn' using classList.add()
        removeButton.classList.add('remove-btn');
        
        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            // When triggered, removes the li element from taskList
            taskList.removeChild(listItem);
            
            // Also remove from Local Storage
            removeTaskFromStorage(actualTaskText);
        };
        
        // Append the remove button to the li element
        listItem.appendChild(removeButton);
        
        // Append the li to taskList
        taskList.appendChild(listItem);
        
        // Clear the task input field if we're adding from input
        if (save) {
            taskInput.value = "";
            
            // Save task to Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(actualTaskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }
    
    // Function to remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const taskIndex = storedTasks.indexOf(taskText);
        
        if (taskIndex > -1) {
            storedTasks.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }
    
    // Add an event listener to addButton
    addButton.addEventListener('click', function() {
        addTask(taskInput.value, true);
    });
    
    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter'
        if (event.key === 'Enter') {
            // Call addTask
            addTask(taskInput.value, true);
        }
    });
    
    // Load tasks from Local Storage when the page loads
    loadTasks();
});
