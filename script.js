console.log('script loaded');

let start=document.getElementById('start');
let container=document.getElementById('container');
console.log(container)
console.log(start)
start.addEventListener('click', draw);


// let size=10;
//fib bullshit
let n1 = 10;
let n2 = 10;
let nextSize=0;
let colors=['red', 'blue','yellow', 'white'];
let directions=['toTheLeft','toTheBottom' ]

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }
  

async function draw(){
for (let i=0; i<8; i++){  
    console.log(n1);
    let topDistance=n1;
    nextSize = n1 + n2;
    n1 = n2;
    n2 = nextSize;   
    drawASquare(n1,i,topDistance);
    await sleep(2000);
//    drawASquare(i);
}
}

function drawASquare(n1,i,topDistance){
    console.log('draw a square')
    let square=document.createElement("div");
    let squareWidth=`${n1}px`;
    let squareHeight=`${n1}px`;
   
    let colorIndex=i;
  
    //to change colors
   if(colorIndex>3){
       colorIndex=i%colors.length;
       console.log('color is' + colorIndex)
   }
 
    square.style.width=squareWidth;   
    square.style.height=squareHeight;
    square.style.backgroundColor=colors[colorIndex];

//     //to change direction

    if (i%2==0){
        square.className='toTheLeft'
    } else{
        square.className='toTheBottom';
        
        let property=`${topDistance}px`;
            square.style.top=property;
    }  

        let p=document.createElement('p');
    p.textContent=n1;
    square.appendChild(p)
       container.appendChild(square); 


   
}