let data = [];
  
let list = document.getElementById("myList");
showItems();

function promptAdd(){
    var itemAdd = window.prompt("Enter name of item to add:");
    if (itemAdd === null){
        return;
    }
    data.push(itemAdd);
    showItems();
}

function promptRemoval(){
    var itemRemove = window.prompt("Enter list number to remove: (leave blank to delete first one)");
    if (itemRemove === null){
        return;
    }
    var itemRemoveInt = parseInt(itemRemove);
    itemRemoveInt -= 1;
    data.splice(itemRemoveInt, 1);
    showItems();
}

function showItems(){
    list.innerHTML='';
    data.forEach((item)=>{
    var li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
    })
}

function showRandom(){
    var x = document.querySelector("#textRandom");
    x.innerHTML='The Random List Item is: ' + data[Math.floor(Math.random()*data.length)];
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}