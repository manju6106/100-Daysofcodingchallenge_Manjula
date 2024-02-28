const taskListElement = document.getElementById('taskList');
const fetchTasksBtn = document.getElementById('fetchTasksBtn');

// Simulated asynchronous function to fetch tasks
function fetchTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const tasks = ['Task 1', 'Task 2', 'Task 3'];
            resolve(tasks);
        }, 2000); // Simulating a 2-second delay
    });
}

// Function to render tasks in the UI
function renderTasks(tasks) {
    taskListElement.innerHTML = '';
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskListElement.appendChild(listItem);
    });
}

// Event listener for fetching tasks
fetchTasksBtn.addEventListener('click', () => {
    fetchTasks()
        .then((tasks) => {
            renderTasks(tasks);
        })
        .catch((error) => {
            console.error('Error fetching tasks:', error);
        });
});
