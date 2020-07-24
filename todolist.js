const todoList = {

    id: 0,
    List: new Array(),
    TableElement: document.createElement("table"),

    Push: (todo) => {
        List.push(todo);
        TableElement.insertRow(todo);
    },

    displayList: (outputElementId) => {
        newOutputElement = this.TableElement.cloneNode(true);
        outputDivElement = document.getElementById(outputElementId);
        outputDivElement.replaceChild(newOutputElement, outputDivElement.firstNode);
    },

    insertRow: (todo) => {

        const statusButton = document.createElement("input");
        statusButton.type = "button";
        statusButton.value = todoStatus[todo.status];

        const deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "削除";

        const row = TableElement.insertRow();
        const cells = new Array();

        for (let i = 0; i < 4; i++) {
            let cell = row.insertCell();
            cells.push(cell);
        }

        cells[0].innerText = todo.id;
        cells[1].innerText = todo.content;
        cells[2].appendChild(statusButton);
        cells[3].appendChild(deleteButton);
    }
};

//初期化
head = todoList.TableElement.createTHead;
head.insertCell().innerText = "ID";
head.insertCell().innerText = "コメント";
head.insertCell().innerText = "状態";
head.insertCell();

const todoStatus = {
    working: "作業中",
    complete: "完了"
}

const addTodo = () => {

    const todo = {
        id: todoList.id++,
        content: document.getElementById("comment").value,
        status: "working"
    }

    todoList.Push(todo);
    todoList.displayList("todoList");

};

