document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(li);

        li.querySelector('.complete-btn').addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', function () {
            li.remove();
        });
    }
});
