document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;
  taskList.appendChild(taskItem);

  saveTaskToLocalStorage(taskText);

  taskInput.value = ''; // Clear the input field
}

function clearTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  // Clear tasks from local storage
  localStorage.removeItem('tasks');
}

function saveTaskToLocalStorage(taskText) {
  let tasks = getTasksFromLocalStorage();

  tasks.push(taskText);

  // Save tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  const tasksString = localStorage.getItem('tasks');
  return tasksString ? JSON.parse(tasksString) : [];
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  const taskList = document.getElementById('taskList');

  tasks.forEach(taskText => {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
  });
}
