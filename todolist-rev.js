let todo_id = 0;

const todoStatus = {
    working: "作業中",
    complete: "完了"
}

const todoList = {
    id: 0,
    List: new Array()
};

const TableElement = document.createElement("table");
TableElement.id = "TodoTable";

const TodoBody = document.createElement("tbody");
TodoBody.id = "TodoBody";
TableElement.appendChild(TodoBody);

const Push = (todo) => {
    todoList.List.push(todo);
    insertRow(todo);
};

const displayList = (outputElementId) => {
    const outputTableElement = document.getElementById(outputElementId);
    const newBody = TodoBody.cloneNode(true);
    const oldBody = document.getElementById("TodoBody");

    outputTableElement.replaceChild(newBody, oldBody);
};

const insertRow = (todo) => {

    const statusButton = document.createElement("input");
    statusButton.type = "button";
    statusButton.value = todoStatus[todo.status];

    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "削除";

    const row = TableElement.insertRow();
        
    for (let i = 0; i < 4; i++) {
        row.insertCell();
    }

    const cells = row.getElementsByTagName("td");

    cells.item(0).innerText = todo.id;
    cells.item(1).innerText = todo.content;
    cells.item(2).appendChild(statusButton);
    cells.item(3).appendChild(deleteButton);
}

const addTodo = () => {

    const todo = {
        id: todo_id++,
        content: document.getElementById("comment").value,
        status: "working"
    }

    Push(todo);
    displayList("TodoTable");

};

