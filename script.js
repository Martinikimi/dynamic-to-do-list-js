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
        
        // Check if the task text is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return; // Exit the function if no task is entered
        }
        
        // Create a new list item for the task
        const listItem = document.createElement('li');
        
        // Create a span for the task text
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskTextSpan.className = 'task-text';
        listItem.appendChild(taskTextSpan);
        
        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Add onclick event to the remove button to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the new task to the task list
        taskList.appendChild(listItem);
        
        // Clear the input field after adding the task
        taskInput.value = "";
        
        // Focus back on the input field for better UX
        taskInput.focus();
    }
    
    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
    
    // Add event listener to the input field for "Enter" key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
    // Optional: Add some sample tasks for demonstration
    const sampleTasks = [
        "Complete JavaScript project",
        "Learn about DOM manipulation",
        "Practice coding exercises",
        "Read documentation"
    ];
    
    // Function to add a sample task
    function addSampleTask(taskText) {
        const listItem = document.createElement('li');
        
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskTextSpan.className = 'task-text';
        listItem.appendChild(taskTextSpan);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }
    
    // Add sample tasks on initial load
    sampleTasks.forEach(addSampleTask);
});
