const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clrBtn = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection-item');

loadEventListeners();

function loadEventListeners(){
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click',removeTask);
  filter.addEventListener('keydown',filterTasks);
  clrBtn.addEventListener('click',clearTasks);
}
function addTask(e){
  if(taskInput.value === ''){
    alert('Enter a Task');
  }
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode((taskInput.value)));
  const link = document.createElement('a');
  link.className = 'delete-item secondary content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = '';
  e.preventDefault();
}
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(i){
    const item = i.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      i.style.display = 'block';
    }else{
      i.style.display = 'none';
    }
  });

  
}
function clearTasks(e){
  taskList.innerHTML = '';
}