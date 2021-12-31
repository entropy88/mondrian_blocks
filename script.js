console.log('script loaded');

let start = document.getElementById('start');
let container = document.getElementById('container');
let numberOfIterationsParagraph = document.getElementById('numberOfIterations');
console.log(container)
console.log(start)
start.addEventListener('click', draw);


function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}


    //fib bullshit
    let n1 = 0;
    let n2 = 10;
    let nextSize = 0;
    let colors = ['red', 'blue', 'yellow', 'white'];
    let directions = ['toTheLeft', 'toTheBottom'];


//kill command
let kill = false;

async function draw() {

    //disable button
    start.disabled=true;
    //reset values
    n1=0;
    n2=10;
    nextSize=0;
   
//clear container
container.innerHTML="";

    //random number of iterations
    let iterations = Math.floor(Math.random() * 15) + 1;
    numberOfIterations.textContent = `You are about to see ${iterations} iterations or as many as your screen allows`
    for (let i = 0; i < iterations; i++) {
        console.log(n1);
        let previous = n1;
        nextSize = n1 + n2;
        n1 = n2;
        n2 = nextSize;
        if (!kill) {
            drawASquare(n1, i, previous);
            await sleep(2000);
        } else {
            alert("Out of space!");  
            start.disabled=false;         
            return;
        }
        
    }
    start.disabled=false;
}

function drawASquare(n1, i, previous) {

    let freeWidth=container.clientWidth-n1;
    let freeHeight=container.clientHeight-(n1+previous);

    if (freeHeight<n1 || freeWidth<n1){
        kill=true;    
    
    }  
  
        let square = document.createElement("div");
        let squareWidth = `${n1}px`;
        let squareHeight = `${n1}px`;

        //get random color
        let randomColor = Math.floor(Math.random() * colors.length);

        square.style.width = squareWidth;
        square.style.height = squareHeight;
        // square.style.backgroundColor=colors[colorIndex];
        square.style.backgroundColor = colors[randomColor];

   //to change direction
        if (i % 2 == 0) {
            square.className = 'toTheLeft'
        } else {
            square.className = 'toTheBottom';

            let property = `${previous}px`;
            square.style.top = property;
        }
   
        container.appendChild(square);       

}