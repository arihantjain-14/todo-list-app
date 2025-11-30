const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const button = document.querySelector(".btn");

button.addEventListener("click",()=>{
    addTask();
})
inputBox.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        addTask();
    }
})

function addTask(){
    if(inputBox.value === ''){
        alert(`You should enter some task`);
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click',(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");

    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
    saveData();

})

function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("Data");
}
showData();