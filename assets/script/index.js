const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addButton = document.getElementById('btn');
const clearButton = document.getElementById('clear-btn');

//Получаем задачи из Local Storage:
let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Показываем список задач:
const showTasks = () => {
  taskList.innerHTML = '';
  

//Если нет задач:
const informMessage = document.querySelector('.inform-message');

if (allTasks.length === 0) {
  informMessage.style.display = 'block';
  clearButton.disabled = true;
} else {
  informMessage.style.display = 'none';
  clearButton.disabled = false;
};

allTasks.forEach((task) => { 
  const liElement = document.createElement("li");

//Чекбоксы:
const check = document.createElement('input');
check.type = 'checkbox';
check.style.marginLeft = '1%';
check.addEventListener('change', () => {
  localStorage.setItem('tasks', JSON.stringify(allTasks));
});

  liElement.textContent = task; 
  taskList.appendChild(liElement);
  liElement.appendChild(check);
  });
};

  taskList.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI') {
      evt.target.classList.toggle('active');
    }
  });  

//Отправляем задачи в localStorage:
  const saveTasks = () => {
    const taskItem = taskInput.value;
    if (taskItem) {
      allTasks.push(taskItem);
      localStorage.setItem('tasks', JSON.stringify(allTasks));
      taskInput.value = '';
      showTasks();
    }
  };

//Очищаем список задач:
  const clearTasks = () => {
    allTasks = [];
    localStorage.removeItem('tasks');
    showTasks();
  };

  addButton.addEventListener('click', saveTasks);

  showTasks();
