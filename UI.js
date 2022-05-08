const todos = [
    {
        text: 'Пойти за хлебом',
        time: '13:05',
        checked: false,
    },
    {
        text: 'Поесть пельменей',
        time: '18:30',
        checked: true,
    },
    {
        text: "Прокрастинировать",
        time: '12:00',
        checked: false,
    }
]


const todosList = document.getElementById('todos_list')
const addBtn = document.getElementById('add_btn')
const myInput = document.getElementById('myInput')
const timeInput = document.getElementById('timeInput')

addBtn.addEventListener('click', handleAddBtnClick)

function handleAddBtnClick() {
    const inputValue = getInputValue()
    const timeValue = getTimeValue()

    const todo = {
        text: inputValue,
        time: timeValue,
        checked: false
    }

    if (!inputValue || !timeValue) {
        alert("Заполни все поля!")
    } else {
        const li = createTodo(todo)
        todosList.appendChild(li);
        clearAllInputs()
    }
}

function initTodos(todos) {
    for (let i = 0; i < todos.length; i++) {
        const li = createTodo(todos[i])
        todosList.appendChild(li)
    }
}

initTodos(todos)


function createTodo(todo) {
    const li = document.createElement("li");

    if (todo.checked) {
        li.classList.add('checked')
    }



    li.addEventListener('click', function () {
        li.classList.toggle('checked')
    })

    const div = document.createElement('span');
    const tickIcon = document.createElement('span');
    tickIcon.innerText = '✔'
    div.className = 'check_box';
    div.appendChild(tickIcon);
    li.appendChild(div);

    const span = document.createElement("span");
    span.innerText = todo.text + ', ' + todo.time
    li.appendChild(span);


    const crossIcon = document.createElement("span");
    crossIcon.innerText = 'x'
    crossIcon.className = "close";
    li.appendChild(crossIcon)

    crossIcon.addEventListener('click', function () {
        li.remove()
    })

    return li
}

function getInputValue() {
    const inputValue = myInput.value
    return inputValue
}

function clearAllInputs() {
    myInput.value = ''
    timeInput.value = ''
}

function getTimeValue() {
    const timeValue = timeInput.value
    return timeValue
}