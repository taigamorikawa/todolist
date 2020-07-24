
let todoId = 0;
const todolist = {
    id: 0,
    List: new Array(),
    displayList: todoDisplay = (tableElement) => {
        
        const tbodyOldElement = document.getElementById("todoBody");
        const tbodyNewElement = document.createElement("tbody");
        tbodyNewElement.setAttribute("id","todoBody");

        // 内容
        todolist.List.forEach(todo => {

            const tr = document.createElement("tr");
            tbodyNewElement.appendChild(tr);

            const td_id = document.createElement("td");
            tr.appendChild(td_id);
            td_id.innerText = todo.id;

            const td_comment = document.createElement("td");
            tr.appendChild(td_comment);
            td_comment.innerText = todo.content;

            const td_status = document.createElement("td");
            tr.appendChild(td_status);
            td_status.setAttribute("class", "SwitchableToButton")
            td_status.innerText = todoStatus[todo.status];

            const td_operation = document.createElement("td");
            tr.appendChild(td_operation);
            td_operation.setAttribute("class", "SwitchableToButton operation");

        });

        tableElement.replaceChild(tbodyNewElement, tbodyOldElement);
    }
}

const todoStatus = {
    working: "作業中",
    complete: "完了"
}

const addTodo = () => {

    const tableTodoBody = document.getElementById("todoTable");
    const todo = {
        id: todoId++,
        content: document.getElementById("comment").value,
        status: "working"
    }

    todolist.List.push(todo);
    todolist.displayList(tableTodoBody);

    let operations = document.getElementsByClassName("operation");
    operations = Array.from(operations);//forEachを利用するための処理
    operations.forEach(element => {
        element.innerText = "削除";
    });

    let swButtonElements = document.getElementsByClassName("SwitchableToButton");
    swButtonElements = Array.from(swButtonElements);//forEachを利用するための処理
    swButtonElements.forEach(element => {

        const input = document.createElement("input");
        input.type = "button";
        input.value = element.innerText;
        element.innerText = "";

        element.appendChild(input);

    });

};