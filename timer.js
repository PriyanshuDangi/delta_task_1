const gridContainer = document.querySelector(".grid-container");
gridContainer.style.fontSize = "400%";
gridContainer.innerHTML = "Click Anywhere";


window.addEventListener('click',countdowm);

function countdowm(){ 
    window.removeEventListener('click',countdowm);
    gridContainer.style.textAlign = "center";
    setTimeout(() => {
        gridContainer.innerHTML = "3";
        console.log(3);
    }, 0);
    setTimeout(() => {
        gridContainer.innerHTML = "2";
        console.log(2);
    }, 1000);
    setTimeout(() => {
        gridContainer.innerHTML = "1";
        console.log(1);
    }, 2000);
    setTimeout(() => myfunc(), 3000);
}


function myfunc(){
    // console.log('hlo');
    gridContainer.innerHTML = '<div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div>' ;
    var gridItem = document.getElementsByClassName("grid-item");
        var start = new Date().getTime();
        x = setInterval(myTimer, 10);
        function myTimer(){
            var now = new Date().getTime();
            timeTaken = now - start;
            //console.log(timeTaken);
            var mSeconds = Math.floor((timeTaken%(1000)));
            var seconds = Math.floor((timeTaken%(1000*60))/1000);
            var minute = Math.floor((timeTaken % (1000 * 60 * 60)) / (1000 * 60));
               
            document.getElementById('timer').textContent = `${minute}:${seconds}:${mSeconds}`;
        } 


for (var a=[],i=0;i<20;++i) a[i]=i;

function shuffle(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

a = shuffle(a);
a.forEach((element, index) => {
    element = element+1;
    gridItem[index].textContent = "" + element;
});
}

var j = 1;
var x;
var timeTaken;
var bestScores;
if(localStorage.getItem('bestScores')){
    bestScoresFull = JSON.parse(localStorage.getItem('bestScores'));
    bestScoresFull.sort(function(a, b){return a - b});
    bestScores = bestScoresFull.slice(0,5);
    console.log(bestScores);
    var para = document.getElementsByTagName('p');
    console.log(para);
    bestScores.forEach((element, index )=> {
        para[index].textContent = timeFormat(bestScores[index])
    })
    // document.getElementById("best-score").textContent = bestScores;
    // console.log(timeFormat(bestScores[0]));
}  else{
    bestScores = [];
    localStorage.setItem('bestScores', JSON.stringify(bestScores));
}

//to change time to minute:seconds:ms format
function timeFormat(timeInFormat){
    var mSeconds = Math.floor((timeInFormat%(1000)));
    var seconds = Math.floor((timeInFormat%(1000*60))/1000);
    var minute = Math.floor((timeInFormat % (1000 * 60 * 60)) / (1000 * 60));
    return `${minute}:${seconds}:${mSeconds}`;
}

//FUNCTION TO CHANGE THE NUMBERS
const change = (event) => {
    var n = parseInt(event.textContent);
    if(j == n){

        if(n===40){
            clearInterval(x);
            var result = document.getElementById('timer').textContent;
            document.getElementById('result').textContent =  `Well done! Your score is ${result}`;
            var bestScoresObject = bestScores.concat(timeTaken);
            var bestScoresJSON = JSON.stringify(bestScoresObject);
            localStorage.setItem('bestScores', bestScoresJSON);
        }
        if(n>20){
            event.textContent = " ";
        } else if(n>0 && n<21){
        event.textContent = 20 + n;
        } j++;
    }
}
