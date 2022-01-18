$('#exampleModalCenter').hide()

let number = Math.ceil(Math.random() * 3);
let randomShape = Math.floor(Math.random() * 3);
let randomColor = Math.floor(Math.random() * 3);
let arrShape = ["ריבוע", "עיגול", "מלבן"];
let arrColor = ["yellow", "green", "red"];
let shape = arrShape[randomShape];
let color = arrColor[randomColor];
let p;
let c;
let s;
let co1;
let x1;
let try2=1;
let z = document.getElementById("myAudio2");
let k = document.getElementById("myAudio3");
let countShape;
let countNumber;
let count=false;
console.log(color);
console.log(shape);
console.log(number);
// randomShape
for (let index = 0; index < number; index++) {
    if (shape === "ריבוע") {
        $(".computer").append(`<div class="Square c m-1" ></div>`);
        $(".c").css("background-color", color);
        c = $(".c");
    } else if (shape === "עיגול") {
        $(".computer").append(`<div class="circle c"></div>`);
        $(".c").css("background-color", color);
        c = $(".c");
    }
    else {
        $(".computer").append(`<div class="rectangle c m-1"></div>`);
        $(".c").css("background-color", color);
        $(".c").css("display", "inline-block");
        c = $(".c");
    }
}
// shapePlayer
function shapePlayer(a) {
    if (countShape) {if (count) {} else{ return}
    } 
    playAudio3()
    switch (a) {
        case 1:
            $(".player").append(`<div class="Square p m-1" ></div>`);
            p = $(".p")
            s = 1;
            countShape=1;
            count=false;
            break;
        case 2:
            $(".player").append(`<div class="circle p"></div>`);
            p = $(".p")
            s = 2;
            countShape=1;
            count=false;
            break;
        default:
            $(".player").append(`<div class="rectangle p m-1"></div>`);
            p = $(".p")
            s = 3;
            countShape=1;
            count=false;
            break;
    }
}
// colorPlayer
function colorPlayer(a) {
    playAudio3()
    switch (a) {
        case 1:
            $(".p").css("background-color", "red");
            p = $(".p")
            co1 = 1;
            break;
        case 2:
            $(".p").css("background-color", "yellow");
            p = $(".p")
            co1 = 2;
            break;
            case 3:
            $(".p").css("background-color", "green");
            p = $(".p")
            co1 = 3;
            break;
            default:
            return
    }
}
// numberPlayer
function numberPlayer(x) {
    if (countNumber==1){return}
    x1 = x;
    playAudio3()
    count=true;
    while (x - 1) {
        shapePlayer(s);
        colorPlayer(co1);
        count=true;
        x--;
    }
    countNumber=1;
count=false;
}
// mark
function mark() {
    playAudio3()
    let y=0;
    if ($(p).css("background-color") === $(c).css("background-color")) {
        $(".mark").append(`<h5>הצבע שבחרת נכון</h5>`)
        y++;
    }
    else {
        $(".mark").append(`<h5>הצבע שבחרת שגוי</h5>`)
    }
    if ($(p).css("width") === $(c).css("width")) {
        $(".mark").append(`<h5>הצורה שבחרת נכונה</h5>`)
        y++;
    }
    else {
        $(".mark").append(`<h5>הצורה שבחרת שגויה</h5>`)
     }
    if (x1 == number) {
        $(".mark").append(`<h5>המספר שבחרת נכון</h5>`)
        y++;
    }
    else {
        $(".mark").append(`<h5>המספר שבחרת שגוי</h5>`)
    }
if (y===3) {
     playAudio2() 
        
setTimeout(() => {
    console.log("oo");

    $("body").html(`<h1 class="success">הצלחת אחרי${try2} נסיונות!<br/><button class="btn-dark mt-4" onclick="AnotherGame()" style="size:30rem">למשחק נוסף-לחץ</button> </h1>`)
    
}, 3000);
$(".show1").slideToggle(3000);
}
     else {
}
}
// AnotherGame
function AnotherGame() {
    location.reload()
    
}
// More experience
$(".try").click(function () {
    try2++;
    $(".player").empty()
    $(".mark").empty()
    countShape=0;
    countNumber=0;
    co1=0;
})
function playAudio2() { 
    z.play()}
    function playAudio3() { 
        k.play()}
