const todos = document.querySelector(".todos");
const addTodos = document.querySelector(".add-todo-form");
const todosArr = [];

const addTodo = () => {
    const value = document.querySelectot("[name=add-todo]").value;
    const todo = {
        value: value,
        done: false
    };

    todosArr.push(todo);
    addTodos.reset();
};

const populateList = (todosArr) => {
    for(let i =0; i < todosArr.length; i++) {
        todosArr[i] = `
            <li>
                <label for="listItem${i}">${todosArr[i]}</label>
                <input type="checkbox">
            </li>
        `;
    }
    todos.innerHTML = todosArr.join('');
};

