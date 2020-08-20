const input =document.querySelector("mainInput");
const addBtn =document.querySelector("addBtn");
const list =document.querySelector("list-group")
const form = document.querySelector("form");

const randomID= () => Math.floor(Math.random()*1000);
let items =
[{
    id: randomID(),
    text: 'Item1'
}];

let formStatus = 'add';

const generateItem = (item) =>
{
    const div = document.createElement("div");
    div.setAttribute("class" ,
    "list-group-item d-flex justify-content-between align items-center");
    div.id =item.id;
    const span =document.createElement("span");
    span.setAttribute("class","text");
    span.innerText =item.text;
    const div2 = document.createElement("div");

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "btn btn-dark editBtn btn-sm mr-1");
    editButton.innerText ="Edit";

    const delButton =document.createElement("button");
    delButton.setAttribute("class", "btn btn-danger editBtn btn-sm mr-1");
    delButton.innerText ="Delete";
    div2.appendChild(editButton);
    div2.appendChild(delButton);
    div.appendChild(span);
    div.appendChild(div2);
    return div;
}

function showItems()
{
    list.innerHTML = "";
    items.forEach(items=>{
        list.appendChild(generateItem(item))
    });
};

showItems();

