
let todoId = 0;
const todolist = {
    id: 0,
    List: new Array(),
    displayList: todoDisplay = (tableElement) => {

        //tbodyOldElementが、tableElementの子要素であることが紐づいてない。（現状id指定取得)
        //todoを表示させたいtable要素(tableElement)の、その子要素であるtbodyを取得する良い方法はないか探している。
        //getElementsbyTagNameは、戻り値がNodeListになる為、replaceChildが使えない。

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
            const input_status = document.createElement("input");
            input_status.type = "button";
            input_status.value = todoStatus[todo.status];
            td_status.appendChild(input_status);

            const td_operation = document.createElement("td");
            tr.appendChild(td_operation);
            td_operation.setAttribute("class", "SwitchableToButton operation");
            const input_operation = document.createElement("input");
            input_operation.type = "button";
            input_operation.value = "削除";
            td_operation.appendChild(input_operation);

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
    
};