var listOfData=[];
//creating array to store the list
var input=document.getElementById("input");
//DOM should collab with html forms
var todo=document.getElementsById("todo");
//Creating ul list
document.getElementById("button").onclick=click;
//inserting a data
function click(){
    if(input.value.trim()=== ""){
        alert("please enter a vaklid task");
        return;
    }
    listOfData.push(input.value)
    //console.log(listOfData);
    input.value=""; 
    showList();
}
function showList(){
    todo.innerHTML="";
listOfData.forEach(function(item,i){
    var li = document.createElement("li");

    li.innerHTML=(
    "<a onclick="edit($(i))"style= margin-left :10px; color : blue ; cursor:pointer;">Edit</a>
    todo.appendChild(li);

});
}
function edit(i){
    var newVal= prompt("please insert new value",listOfData[i]);
    if(newVal !== null && newVal.trim() !== ""){
    listOfData.splice(i,1,newVal);
    showList();
    }
}
function deletelst(i){
    listOfData.splice(i,1)
    showList()
}