const todoList = {
    ID: 0,
    List: new Array(),
    todoStatus: {
        working: "作業中",
        complete: "完了"
    },
    Table: table ={

        Element: TableElement = document.createElement("table"),
        Body: TodoBody = document.createElement("tbody"),
        BodyId: "TodoBody"
 
    },
    Initialize: init = () => {

        TodoBody.id = todoList.Table.BodyId;
        todoList.Table.Element.appendChild(TodoBody);

    },
    Push: push = (todo) => {

        todoList.List.push(todo);

        const statusButton = document.createElement("input");
        statusButton.type = "button";
        statusButton.value = todoList.todoStatus[todo.status];

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

    },
    displayList: disp = (outputElementId) => {

        const outputTableElement = document.getElementById(outputElementId);

        const newBody = todoList.Table.Body.cloneNode(true);
        const oldBody = document.getElementById(todoList.Table.BodyId);

        outputTableElement.replaceChild(newBody, oldBody);

    }
};

//コンストラクタ替わりに
todoList.Initialize();

const addTodo = () => {

    const todo = {
        id: todoList.ID++,
        content: document.getElementById("comment").value,
        status: "working"
    }

    todoList.Push(todo);
    todoList.displayList("TodoTable");

};

