const gridContainer = document.querySelector(".grid-container");
gridContainer.style.fontSize = "300%";
gridContainer.innerHTML = "Click Here To Start The Game";
const button = document.querySelector('button');
//click to start
gridContainer.addEventListener('click',countdowm);
button.addEventListener('click',countdowm);

function countdowm(){ 
    clearInterval(x);
    document.getElementById('timer').textContent = "0:00:00"
    gridContainer.removeEventListener('click',countdowm);
    gridContainer.style.fontSize = "600%";
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

var start;
function myfunc(){
    gridContainer.style.gridTemplateColumns = "20% 20% 20% 20% 20%";
    gridContainer.style.gridTemplateRows = "25% 25% 25% 25%";
    gridContainer.innerHTML = '<div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div>' ;
    var gridItem = document.getElementsByClassName("grid-item");
    start = new Date().getTime();
    x = setInterval(myTimer, 10);
         
    for (var a=[],i=0;i<20;++i) a[i]=i;
    a = shuffle(a);
    a.forEach((element, index) => {
        element = element+1;
        gridItem[index].textContent = "" + element;
    });
}

var timeTaken;
//function for timer
function myTimer(){
    var now = new Date().getTime();
    timeTaken = now - start;
    document.getElementById('timer').textContent = timeFormat(timeTaken);
}


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

var j = 1;
var x;
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
}  else{
    bestScores = [];
    localStorage.setItem('bestScores', JSON.stringify(bestScores));
}

//to change time to minute:seconds:mSeconds format
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
