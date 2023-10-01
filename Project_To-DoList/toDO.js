const inputBox= document.getElementById("input-box")
const List= document.getElementById("list")

function addtask(){
 if(inputBox.value==='')
 {
    alert("you must write something!")
 }
 else{
    //for the list that we enter in the Box
    let li = document.createElement('li');
    li.innerHTML=inputBox.value;
    List.appendChild(li);
    
    //for CROSS noataion
    let span = document.createElement("span") 
    span.innerHTML="\u00d7";
    li.appendChild(span);
 }
 inputBox.value='';
 saveData();

}


List.addEventListener("click",function(e){
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        //The "classList" property allows you to manipulate the classes of an HTML element. The "toggle" method adds the "checked" class if it doesn't exist on the element and removes it if it does.
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }

    }
,false);



function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function displayList(){
  list.innerHTML=localStorage.getItem("data");
}

displayList()