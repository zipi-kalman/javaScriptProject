
let arr=[];
let arr2=[];
let div=$("#Screen")
let action;
let result;
let Ans;
let d = document.getElementById("myAudio");
// muzik
function playAudio() { 
    d.play()}
// color choice
function color(colorChoice) {
    $("#rowScreen").parent().css("background-color",colorChoice)
}
// DeletionCalculator
 function DeletionCalculator() {
    $(".calculator").remove();
 } 
//  nunber choice
function number(num){
    playAudio()
    if ( arr2.length === 0 && arr.length === 0) {
        $(div).empty();
    }
    $(div).append(num)
    arr.push(num);
   
}
// action
function act(action1){
    playAudio()
    if (arr2.length === 0 && arr.length === 0) {
        arr.push(Ans);   
    }
    action=action1;
    $(div).append(action);
arr2.push(arr.join(""));
arr2.push(action);
arr=[]; 
}
// result
function result1(){
    playAudio()
    arr2.push(arr.join(""));
    arr=[]; 
    $(div).append("=");
    result=arr2[0];
    result=Number(result);
    for ( index = 1; index <arr2.length; index=index+1) {
        switch (arr2[index]){
            case "+":
                let a=arr2[(index+1)]
                a=Number(a);
                result=result+a;
            break;
            case "-":
                let b=arr2[(index+1)]
                b=Number(b);
                result=result-b;
            break;
            case "*":
                let c=arr2[(index+1)]
                c=Number(c);
                result=result*c;
            break;
            case "/":
                let d=arr2[(index+1)]
                d=Number(d);
                result=result/d;
            break;
            debugger
            case "%":
                let e=arr2[(index-1)]
                e=Number(e);
                result=e/100;
            break;
        }
        }
        $(div).empty();  
        result = result.toFixed(2);      
 $(div).append(result);
 arr2=[];
 Ans=result    
    }
    // ans
  function ans() {
    playAudio()
    arr2.push(Ans)
    $(div).append(Ans);
  } 
//   delete
  function ac() {
    playAudio()
    location.reload()
    

  }
