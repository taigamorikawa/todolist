const addTodo = () => {

    const todoTable = document.getElementById("todoTable");
    const id = todoTable.childElementCount - 1;
    
    const tr = document.createElement("tr");

    let td = new Array(4);
    for (let i = 0; i < td.length; i++) {
        element = document.createElement("td");
        tr.appendChild(element);

        switch(i){
            case 0:
                element.innerText = id;
                tr.appendChild(element);
                break;

            case 1:
                element.innerText = document.getElementById("comment").value;
                break;

            case 2:
                const button_working = document.createElement("input");
                button_working.type = "button";
                button_working.value = "作業中";
                element.appendChild(button_working);                
                break;

            case 3:
                const button_delete = document.createElement("input");
                button_delete.type = "button";
                button_delete.value = "削除";
                element.appendChild(button_delete);
                break;
        }

    }

    todoTable.appendChild(tr)
    document.getElementById("comment").value = "";

}

