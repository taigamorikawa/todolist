let id = 0;
const todolist = {
    id: 0,
    List: new Array(),
    displayList: todoDisplay = (divElement) => {
        const divChild = divElement.firstChild;
        const table = document.createElement("table");

        const tr = document.createElement("tr");
        table.appendChild(tr);

        // ヘッダ
        const th_id = document.createElement("th");
        tr.appendChild(th_id);
        th_id.innerText = "ID";

        const th_comment = document.createElement("th");
        tr.appendChild(th_comment);
        th_comment.innerText = "コメント";

        const th_status = document.createElement("th");
        tr.appendChild(th_status);
        th_status.innerText = "状態";

        // 内容
        todolist.List.forEach(todo => {

            const tr = document.createElement("tr");
            table.appendChild(tr);

            const td_id = document.createElement("td");
            tr.appendChild(td_id);
            td_id.innerText = todo.id;

            const td_comment = document.createElement("td");
            tr.appendChild(td_comment);
            td_comment.innerText = todo.content;

            const td_status = document.createElement("td");
            tr.appendChild(td_status);
            td_status.innerText = todo.status;

        });

        divElement.replaceChild(table, divChild);
    }
}

const addTodo = () => {
    const divTodoTable = document.getElementById("todoTable");

    const todo = {
        id: id++,
        content: document.getElementById("comment").value,
        status: "作業中"
    }

    todolist.List.push(todo);

    const divChild = divTodoTable.firstChild;
    const table = document.createElement("table");

    const tr = document.createElement("tr");
    table.appendChild(tr);

    // ヘッダ
    const th_id = document.createElement("th");
    tr.appendChild(th_id);
    th_id.innerText = "ID";

    const th_comment = document.createElement("th");
    tr.appendChild(th_comment);
    th_comment.innerText = "コメント";

    const th_status = document.createElement("th");
    tr.appendChild(th_status);
    th_status.innerText = "状態";

    // 内容
    todolist.List.forEach(todo => {

        const tr = document.createElement("tr");
        table.appendChild(tr);

        const td_id = document.createElement("td");
        tr.appendChild(td_id);
        td_id.innerText = todo.id;

        const td_comment = document.createElement("td");
        tr.appendChild(td_comment);
        td_comment.innerText = todo.content;


        const td_working = document.createElement("td");
        tr.appendChild(td_working); 
        const button_working = document.createElement("input");
        td_working.appendChild(button_working);
        button_working.type = "button";
        button_working.value = todo.status;


        const td_delete = document.createElement("td");
        tr.appendChild(td_delete);
        const button_delete = document.createElement("input");
        td_delete.appendChild(button_delete);
        button_delete.type = "button";
        button_delete.value = "削除";

    });

    divTodoTable.replaceChild(table, divChild);
};