const inputBox=document.getElementById("input-box");
const ListContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something !")
    }
    else{
        let li=document.createElement("li");   /*Creates a dummy variable */
        li.innerHTML=inputBox.value;     /*Adds the input text to dummy variable */
        ListContainer.appendChild(li); /*appendChild() to add the input to the list */
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value=" ";  /* To clear the value in input box after writing */
    saveData();
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){  /*For the cross*/
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);
}
function showTask(){
    ListContainer.innerHTML=localStorage.getItem("data");
}
showTask();
