let taskCount = 0;
let todoTasks = 0;
let inProgressTasks = 0;
let doneTasks = 0;

const addTaskBtn = document.getElementById('add-task-btn');
const addBtn = document.getElementById('add');
const delBtn = document.getElementById('delete-task-area');

const allBoards = document.getElementsByClassName('drop-zone');
const allItems = document.getElementsByClassName('item');


function updateTodoTask(count){
    const countTodo = document.getElementById("todo-count");
    countTodo.innerHTML = count;
}

function updateAllTaskCount(){
    const countTodo = document.getElementById("todo-count");
    const inProgressTodo = document.getElementById("inProgress-count");
    const doneTodo = document.getElementById("done-count");
    todoTasks=document.getElementById("todo").children.length;
    inProgressTasks=document.getElementById("inprogress").children.length;
    doneTasks=document.getElementById("done").children.length;
    countTodo.innerHTML = todoTasks;
    inProgressTodo.innerHTML = inProgressTasks;
    doneTodo.innerHTML = doneTasks;
}



function addTask (data) {
    const taskCard = document.createElement('p');
    taskCard.setAttribute('draggable','true');
    taskCard.classList.add('item');
    taskCard.innerText = data;
    taskCard.id = `task-${taskCount++}`;
    todoTasks++;
    updateTodoTask(todoTasks);
    onDragStart(taskCard);
    document.getElementById('todo').appendChild(taskCard);
}

addTaskBtn.addEventListener('click', () => {
    const inputContainer = document.getElementById('input-container')
    inputContainer.classList.remove('hide');
    
})


add.addEventListener('click', () => {
    const inputContainer = document.getElementById('input-container')
    const inputData = document.getElementById('inputTask');
    const data = inputData.value;

    if(data.trim().length == 0){
        alert('No task entered');
    }
    else{
        addTask(data);
        inputData.value = ""
        inputData.placeholder = "Add the task..."
    }
   
    inputContainer.classList.add('hide');
    
})


  function onDragStart(target) {
    target.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
}



  for(let i = 0; i<allItems.length; i++){
    onDragStart(allItems[i]);
  }

  function onDragOver (target){
    target.addEventListener('dragover', (event) => {
        event.preventDefault();
      });
  }

  function addOnDrop(target) {

    target.addEventListener('drop',(event) => {

        event.preventDefault();
        const id = event.dataTransfer.getData('text/plain');
        if (!id) return;

        const draggableElement = document.getElementById(id);
        if (!draggableElement) return;

        const dropzone = event.target;
        if(dropzone.classList.contains("drop-zone"))
            dropzone.appendChild(draggableElement);
        event.dataTransfer.clearData();
        updateAllTaskCount();

    })
    
  }

  for(let i = 0; i<allBoards.length; i++){
    onDragOver(allBoards[i]);
    addOnDrop(allBoards[i]);
  }

  delBtn.addEventListener('dragover', (event) => {
    event.preventDefault(); 
    delBtn.style.backgroundColor = "#ff4d4d"; // Highlight when dragging over
    delBtn.style.transform = "scale(1.05)";
});

delBtn.addEventListener('dragleave', () => {
    delBtn.style.backgroundColor = "#b04d3a"; // Reset to default when dragging out
    delBtn.style.transform = "scale(1)";
});

    delBtn.addEventListener('drop',(event) => {
        console.log('dropped')
        event.preventDefault();

        delBtn.style.backgroundColor = "#b04d3a"; // Reset after dropping
        delBtn.style.transform = "scale(1)";

        const id = event.dataTransfer.getData('text/plain');
        if (!id) return;

        const draggableElement = document.getElementById(id);
        if (!draggableElement) return;

        draggableElement.remove();
        event.dataTransfer.clearData();
        updateAllTaskCount();

    })
    

  



























































//another way

// function attachDragEvents(target) {
//     target.addEventListener('dragstart', () => {
//       target.classList.add('flying');
//     });
//     target.addEventListener('dragend', () => {
//       target.classList.remove('flying');
//     });
//   }

//   for(let i = 0; i<allItems.length; i++){
//     attachDragEvents(allItems[i]);
//   }

//   for(let i = 0; i<allBoards.length; i++){
//     let board = allBoards[i];
//     board.addEventListener('dragover', () => {
//         const flyingElement = document.getElementsByClassName('flying');
//         console.log(board, 'Kuch toh mere upper se gya', flyingElement[0]);
    
//         board.appendChild(flyingElement[0]);
//       });
//   }

// delBtn.addEventListener('dragover', () => {
//     console.log("ye gaya")
//     const flyingElement = document.querySelector('.flying');
//     if (flyingElement) {
//         flyingElement.remove();
//     } else {
//         console.error("Deleted");
//     }
    
// })
