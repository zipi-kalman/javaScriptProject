let date1=new Date().toLocaleDateString()
  let date2;
  let arr=[]
  let filterNameTask;
  let filter=false;
  let alertDate=false;
  let d = document.getElementById("myAudio");

$(document).ready(function () {
    append_tasks()
})
  $(".buttonk").click(function(){
    playAudio()
    Creating_an_array()
    Local_keepingme()
    alertDate=true;
    append_tasks()
    $("input").val("")
    alertDate=false;
    })
// muzik
function playAudio() { 
    d.play()}
//   Creating an array
function Creating_an_array() {
    let objectTask={}
    objectTask.name=$("#name").val();
    objectTask.date=$("#date").val();
    objectTask.task=$("#task").val();
    arr.push(objectTask)
} 
// Local keeping
function Local_keepingme() {
    localStorage.setItem("tasks",JSON.stringify(arr));
}
//append_from_the_Local_keeping
function append_from_the_Local_keeping() {
    arr=JSON.parse(localStorage.getItem("tasks"))
    if (arr==null) {arr=[]
    }
}
// empty
function empty() {
    $(".divTask").remove();
    // $("Main_Div:not(.className)").empty();
}
// Creating_an_tasks
function Creating_an_tasks() {
    for (let index = 0; index < arr.length; index++) {
    let name_task=arr[index].name;
    let task=arr[index].task;
    let date=arr[index].date;
    dateTask=date[0]+date[1]+date[2]+date[3]+date[5]+date[6]+date[8]+date[9]
    date2=date[8]+date[9]+"-"+date[5]+date[6]+"-"+date[0]+date[1]+date[2]+date[3]
    dateToday=date1[6]+date1[7]+date1[8]+date1[9]+date1[3]+date1[4]+date1[0]+date1[1]
        if (dateToday<dateTask||dateToday==dateTask){
    let month=date[6];
    let month2=date[5];
    if (month2=="1"&&month=="1") {month="11"}
 else if (month2=="1"&& month=="2") {month="12"}
    let div=$(`<div id="div1" class="m-2 divTask"></div>`)
    $(div).append(`<span class="clear" id="clear" onclick="cler(${index})">x</span>`);
    $(div).append(name_task+'-');
    $(div).append(task+" "+"בתאריך"+" ");
    $(div).append(date2);
    if (filter==true) {if (arr[index].name==filterNameTask) {
        $(`.div${month}`).append(div);
    }
    } else {
        $(`.div${month}`).append(div);
    }
}else{
    if (alertDate) {
     alert("הקלד תאריך עתידי") 
    }
    arr.splice([index],1)
}
}}
// Deletion
function cler(index){
    console.log(index)
    arr.splice([index],1)
    console.log(arr);
    Local_keepingme()
    append_tasks()
    }
// append_tasks
function append_tasks() {
   empty()
   append_from_the_Local_keeping()
    Creating_an_tasks()
}
// Filter
function Filter() {
    playAudio()
    empty()
    append_from_the_Local_keeping()
    filterNameTask=$("#filter").val()
    filter=true;
    Creating_an_tasks()
    filter=false;
}
    // Unfilter
    function Unfilter() {
      location.reload()
    }
    