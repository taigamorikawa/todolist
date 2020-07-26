const todoList = new TodoList("todoTable");

const addTodo = () => {

    const todo = {
        id: todoList.id++,
        content: document.getElementById("comment").value,
        status: "working"
    }

    todoList.push(todo);
    todoList.displayList();

};