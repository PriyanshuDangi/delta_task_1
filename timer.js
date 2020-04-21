const gridContainer = document.querySelector(".grid-container");
var select = document.querySelector('#difficulty');
const button = document.querySelector('button');
function startFunction(){
    clearInterval(x);
    document.getElementById('timer').textContent = "0:00:00"
    gridContainer.style.gridTemplateColumns = "auto";
    gridContainer.style.fontSize = "300%";
    gridContainer.textContent = "Click Here To Start The Game";
    gridContainer.addEventListener('click',countdowm);
    bestScoreFunction();
};
startFunction();


//click to start
gridContainer.addEventListener('click',countdowm);
button.addEventListener('click',countdowm);
select.addEventListener('change', startFunction);

var difficulty;
var countdownMP3 = document.getElementById('countDown');

function countdowm(){
    difficulty = document.getElementById('difficulty').value;
    bestScoreFunction();
    j=1; 
    clearInterval(x);
    document.getElementById('timer').textContent = "0:00:00"
    gridContainer.removeEventListener('click',countdowm);
    // gridContainer.style.fontSize = "600%";
    gridContainer.style.textAlign = "center";
    setTimeout(() => {
        gridContainer.textContent = "3";
        gridContainer.style.fontSize = "600%";
        countdownMP3.play();
    }, 100);
    setTimeout(() => {
        gridContainer.textContent = "2";
    }, 1100);
    setTimeout(() => {
        gridContainer.textContent = "1";
    }, 2100);
    setTimeout(() => myfunc(), 3100);
}   

var start;
//start the game
function myfunc(){
    gridContainer.innerHTML = '<div class="row-left"> <div class="row5"> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> </div> </div><div class="row-left"> <div class="row5"> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> </div> </div><div class="row-left"> <div class="row5"> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> </div> </div><div class="row-left"> <div class="row5"> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> <div class="grid-item" onclick="change(this)"></div> </div> </div>';

    var gridItem = document.getElementsByClassName("grid-item");
    start = new Date().getTime();
    x = setInterval(myTimer, 10);
         
    for (var a=[],i=0;i<20;++i) a[i]=i;
    a = shuffle(a);
    a.forEach((element, index) => {
        element = element+1;
        var g = 90 - element*2;
        gridItem[index].style.backgroundColor = `rgb(${g}%,${g}%,${g}%)`;
        gridItem[index].style.color =   `black`;
        gridItem[index].textContent = "" + element;
    });

    for (var rowIndex = 0; rowIndex<4;rowIndex++){
        var row5 =document.getElementsByClassName("row-left")[rowIndex].innerHTML;
        var row = row5 + row5;
        document.getElementsByClassName("row-left")[rowIndex].innerHTML =row;
    }

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
function bestScoreFunction(){
    difficulty = document.getElementById('difficulty').value;
    if(localStorage.getItem('bestScores' + difficulty)){
        bestScoresFull = JSON.parse(localStorage.getItem('bestScores' + difficulty));
        bestScoresFull.sort(function(a, b){return a - b});
        bestScores = bestScoresFull.slice(0,5);
        //console.log(bestScores);
        var para = document.getElementsByTagName('p');

        for(var par=0;par<5;par++){
        para[par].textContent = "";
        }

        bestScores.forEach((element, index )=> {
            para[index].textContent = timeFormat(bestScores[index])
        })
    }  else{
        bestScores = [];
        localStorage.setItem('bestScores'+difficulty, JSON.stringify(bestScores));
    }
}

//bestScoreFunction();

//to change time to minute:seconds:mSeconds format
function timeFormat(timeInFormat){
    var mSeconds = Math.floor((timeInFormat%(1000)));
    var seconds = Math.floor((timeInFormat%(1000*60))/1000);
    var minute = Math.floor((timeInFormat % (1000 * 60 * 60)) / (1000 * 60));
    return `${minute}:${seconds}:${mSeconds}`;
}

const easy = 20;
const medium = 40;
const difficult = 60;
var z = document.getElementById("myAudio");

//FUNCTION TO CHANGE THE NUMBERS
const change = (event) => {
    var n = parseInt(event.textContent);
    //console.log(j, n);
    if(j == n){
        z.play();
        if(difficulty == easy){
            f20(n,event);
        }
        else if(difficulty == medium){
            f40(n, event);
        } else if(difficulty == difficult){
            f60(n, event);
        }
        j++;
    }
}

//for easy level
function f20(n, event){
    if(n===easy){
        complete();        
    }
    
    if(n<(easy+1)){
        event.style.visibility = "hidden";
        secondElement(event).style.visibility = "hidden"
        event.textContent = "0";
        secondElement(event).textContent = "0";
        
    } 
}
//for medium level
function f40(n, event){
    if(n===medium){
        complete(); 
    }
    
    if(n>(medium/2)){
        event.style.visibility = "hidden";
        secondElement(event).style.visibility = "hidden"
        event.textContent = "0";
        secondElement(event).textContent = "0";
        
    } else if(n>0 && n<((medium/2)+1)){
        var g = 50 - (n)*2;
        event.style.backgroundColor = `rgb(${g}%,${g}%,${g}%)`;
        secondElement(event).style.backgroundColor = `rgb(${g}%,${g}%,${g}%)`;
        event.style.color = `white`;
        secondElement(event).style.color = `white`;
        event.textContent = (medium/2) + n;
        secondElement(event).textContent = (medium/2) + n;
    } 
}

//for difficult level
function f60(n, event){
    if(n===difficult){
        complete();        
    }
    
    if(n>((difficult*2)/3)){
        event.style.visibility = "hidden";
        secondElement(event).style.visibility = "hidden"
        event.textContent = "0";
        secondElement(event).textContent = "0";
        
    } else if(n>0 && n<((difficult/3)+1)){
        var g = 50 - (n)*2;
        event.style.backgroundColor = `rgb(${g}%,${g}%,${g}%)`;
        secondElement(event).style.backgroundColor = `rgb(${g}%,${g}%,${g}%)`;
        event.style.color = `white`;
        event.textContent = (difficult/3) + n;
        secondElement(event).style.color = `white`;
        secondElement(event).textContent = (difficult/3) + n;
    } else{
        event.textContent = (difficult/3) + n;
        var g = 90 - (n-20)*2;
        event.style.backgroundColor = `rgb(${g}%,${g}%,${g}%)`;
        event.style.color =   `black`;
        secondElement(event).textContent = (difficult/3) + n;
        secondElement(event).style.backgroundColor = `rgb(${g}%,${g}%,${g}%)`;
        secondElement(event).style.color =   `black`;
    }
}


function complete(){
    clearInterval(x);
    var result = document.getElementById('timer').textContent;
    document.getElementById('result').textContent =  `Well done! Your score is ${result}`;
    var bestScoresObject = bestScores.concat(timeTaken);
    var bestScoresJSON = JSON.stringify(bestScoresObject);
    localStorage.setItem('bestScores'+difficulty, bestScoresJSON);            
    bestScoreFunction();
}

//to change the second grid item of the same row
function secondElement(event){
    const q = event.parentElement;
        var nodes = Array.prototype.slice.call( q.children );
        var nodeIndex = nodes.indexOf(event);
        var sibling;
        if(q.nextElementSibling){
            sibling = q.nextElementSibling;
        }
        if(q.previousElementSibling){
             sibling = q.previousElementSibling;
        }
        return sibling.children[nodeIndex];
        console.log(sibling.children[nodeIndex]);

}