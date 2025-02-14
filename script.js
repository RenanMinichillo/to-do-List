const addTask = document.querySelector('#add-task');
const taskList = document.querySelector('.task-list');

addTask.addEventListener('click', () => {
    const newTask = document.querySelector('#new-task').value;

    if (newTask === '') {
        alert('Campo vazio, Insira sua nova tarefa!');
    }
    else {
        const createLi = document.createElement('li');
        createLi.classList.add('task-item');
        const createBtnFinish = document.createElement('button');
        createBtnFinish.classList.add('task-finish');
        createBtnFinish.textContent = '✅';
        const createParagraph = document.createElement('p');
        createParagraph.textContent = `${newTask}`;
        const createBtnRemove = document.createElement('button');
        createBtnRemove.classList.add('task-remove');
        createBtnRemove.textContent = '❌';

        taskList.appendChild(createLi);
        createLi.appendChild(createBtnFinish);
        createLi.appendChild(createParagraph);
        createLi.appendChild(createBtnRemove);

        let finished = false;

        document.querySelector('#new-task').value = '';

        createBtnFinish.addEventListener('click', () => {
            finished = !finished
            if (finished) {
                createLi.style.backgroundColor = '#50fa7b';
                createParagraph.style.textDecoration = 'line-through';
            } else {
                createLi.style.backgroundColor = '#343746';
                createParagraph.style.textDecoration = 'none';
            }
        })

        createBtnRemove.addEventListener('click', () => {
            createLi.remove();
        })
    }
})