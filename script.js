document.getElementById('submitTasksMSQ').addEventListener('click', function() 
{
    const taskInput = document.getElementById('enterTaskMSQ');
    const taskText = taskInput.value; 

    if (taskText) 
    {
        const todaysTasks = document.getElementById('todaysTasks');

        const newList = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function() 
        {
            if (checkbox.checked) {
                const completedTasks = document.getElementById('completedTasks');
                completedTasks.appendChild(newList); 
                todaysTasks.removeChild(newList); 
            } else {
                todaysTasks.appendChild(newList);
                const completedTasks = document.getElementById('completedTasks');
                completedTasks.removeChild(newList); 
            }
        });

        newList.appendChild(checkbox);

        const taskLabel = document.createElement('span');
        taskLabel.innerHTML = taskText;

        newList.appendChild(taskLabel);
        todaysTasks.appendChild(newList); 

        taskInput.value = ''; 
    }

});
