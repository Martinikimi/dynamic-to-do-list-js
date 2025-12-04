// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Function to add a new task to the list
    function addTask() {
        // Get and trim the task text from the input field
        const taskText = taskInput.value.trim();
        
        // Check if the task text is not empty
        if (taskText !== "") {
            // Create a new li element
            const listItem = document.createElement('li');
            // Set its textContent to taskText
            listItem.textContent = taskText;
            
            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            // Set its textContent to "Remove"
            removeButton.textContent = "Remove";
            // Give it a class name of 'remove-btn'
            removeButton.className = 'remove-btn';
            
            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                // When triggered, removes the li element from taskList
                taskList.removeChild(listItem);
            };
            
            // Append the remove button to the li element
            listItem.appendChild(removeButton);
            
            // Append the li to taskList
            taskList.appendChild(listItem);
            
            // Clear the task input field
            taskInput.value = "";
        }
    }
    
    // Add an event listener to addButton
    addButton.addEventListener('click', addTask);
    
    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter'
        if (event.key === 'Enter') {
            // Call addTask
            addTask();
        }
    });
});
