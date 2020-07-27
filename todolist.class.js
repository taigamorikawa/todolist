class TodoList {

    #id = 0;
    #list = new Array();

    #tableId = "";

    #table = document.createElement("table");
    #tbody = document.createElement("tbody");

    #todoStatus = {
        working: "作業中",
        complete: "完了"
    }

    constructor(outputTableID) {

        this.#tableId = outputTableID;

        this.#table.id = outputTableID;
        this.#table.appendChild(this.#tbody);

    }

    get id() {
        return this.#id++;
    }

    get tableId() {
        return this.#tableId;
    }

    push(todo) {

        this.#list.push(todo);

        const statusButton = document.createElement("input");
        statusButton.type = "button";
        statusButton.value = this.#todoStatus[todo.status];

        const deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "削除";

        const row = this.#table.insertRow();

        for (let i = 0; i < 4; i++) {
            row.insertCell();
        }

        const cells = row.getElementsByTagName("td");

        cells.item(0).innerText = todo.id;
        cells.item(1).innerText = todo.content;
        cells.item(2).appendChild(statusButton);
        cells.item(3).appendChild(deleteButton);

    }

    displayList() {

        const docTable = document.getElementById(this.tableId);
        const parent = docTable.parentNode;

        const newTable = this.#table.cloneNode(true);
        const newHead = docTable.tHead.cloneNode(true);
        newTable.appendChild(newHead);

        parent.replaceChild(newTable, docTable);
        
    }
}
