class todoList {
    
    ID = 0;
    List = new Array();

    #Table = document.createElement("table");
    #TBody = document.createElement("tbody");
    BodyId = "TodoBody";

    todoStatus = {
        working: "作業中",
        complete: "完了"
    }

    constructor(){
        this.#TBody.id = this.BodyId;
        this.#Table.appendChild(this.#TBody);
    }
    
    Push = (todo) => {

        this.List.push(todo);

        const statusButton = document.createElement("input");
        statusButton.type = "button";
        statusButton.value = this.todoStatus[todo.status];

        const deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "削除";

        const row = this.#Table.insertRow();

        for (let i = 0; i < 4; i++) {
            row.insertCell();
        }

        const cells = row.getElementsByTagName("td");

        cells.item(0).innerText = todo.id;
        cells.item(1).innerText = todo.content;
        cells.item(2).appendChild(statusButton);
        cells.item(3).appendChild(deleteButton);

    }

    displayList = (outputTableElementId, childBodyId) => {

        const outputTableElement = document.getElementById(outputTableElementId);

        if(childBodyId !== this.BodyId){
            console.warn("指定されたIDが不正な可能性があります。");
        }

        const newBody = this.#TBody.cloneNode(true);
        const oldBody = document.getElementById(this.BodyId);

        outputTableElement.replaceChild(newBody, oldBody);

    }
}

const TodoList = new todoList();

const addTodo = () => {

    const todo = {
        id: TodoList.ID++,
        content: document.getElementById("comment").value,
        status: "working"
    }

    TodoList.Push(todo);
    TodoList.displayList("TodoTable","TodoBody");

};

