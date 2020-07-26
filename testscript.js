let todoId = 0;

const table = document.createElement("table");
table.id = "TodoTable"

const body = table.createTBody();
const head = table.createTHead();
const hrow = head.insertRow();

for (let i = 0; i < 4; i++) {
    hrow.insertCell();
}

const cells = hrow.getElementsByTagName("td");

cells.item(0).innerText = "id";
cells.item(1).innerText = "comment";
cells.item(2).innerText = "status";
cells.item(3).innerText = "ope";

const addTodo = () => {

    todo = {
        id: todoId++,
        content: document.getElementById("comment").value,
        status: "working"
    }

    const row = body.insertRow();

    for (let i = 0; i < 4; i++) {
        row.insertCell();
    }

    const cells = row.getElementsByTagName("td");

    cells.item(0).innerText = todo.id;
    cells.item(1).innerText = todo.content;
    cells.item(2).innerText = todo.status;
    cells.item(3).innerText = "delete";

    //const newTable = table.cloneNode(true);
    //const docDiv = document.getElementById("todoList");
    //docDiv.appendChild(table);

    const newTable = table.cloneNode(true);
    const docTable = document.getElementById("TodoTable");
    const parent = docTable.parentNode;
    parent.replaceChild(docTable,newTable);

}
