let colorSeq=[];
let userSeq=[];
let btns=["yellow","green","red","purple"];

let started= false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keydown",function(){
    if(started==false){
        console.log("game has started");
        started=true;

     levelUp();   
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    colorSeq.push(randColor);
    console.log(colorSeq);
    // console.log(colorSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    btnFlash(randBtn);
}

// for key press
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);

}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
   btn.addEventListener("click",btnPress) 
}

function btnPress(){
    let btn=this;
    btnUserFlash(btn);
   
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

//for user press
function btnUserFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);

}

function checkAns(idx){
    console.log("curr level:",level)

    
    if( userSeq[idx]===colorSeq[idx]){
        if(userSeq.length==colorSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to continue!!!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        } ,150)
        reset ();
    }
}


function reset () {
    started=false;
    colorSeq=[];
    userSeq=[];
    level=0;

}