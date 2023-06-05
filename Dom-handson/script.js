let forid=document.getElementById("text")
console.log(forid.innerHTML)

let heading=document.getElementsByTagName("h1")
console.log(heading[0].innerHTML)
let forclass=document.getElementsByClassName("box")
console.log(forclass[0].innerHTML);


function change_me(){
   heading[2].innerHTML="Welcome to Elevation academy"
}


heading[1].addEventListener('click',()=>{
    heading[1].innerHTML="Hello World"
})

let id_heading=document.getElementById("heading");
let count =0;
id_heading.addEventListener('click', ()=>{
    
    
    if(count%2===0){
        id_heading.style.color="red";
        count++;
    }else{
        id_heading.style.color="yellowgreen";
        count--;
    }
})
let parentbox=document.getElementById('parentbox')
function changedirection(){
    if(count%2===0){
        parentbox.style.display='block';
    parentbox.style.gap='10px';
        count++;
    }else{
        parentbox.style.display='flex';
        count--;
    }
   
    
}
let heading2=document.getElementsByTagName("h2");
heading2[0].addEventListener('click' ,()=>{
    function startclock(){
        let time=new Date();
        let hrs = time.getHours();
        let min= time.getMinutes();
        let secs=time.getSeconds();
        let AMPM="AM";
        if(hrs>12){
        hrs -=12;
        AMPM="PM"
        }
        console.log(`Time : ${hrs}:${min}:${secs} `);
        heading2[1].innerHTML=`${hrs}:${min}:${secs} ${AMPM}`
    }
    setInterval(() =>{
        startclock();
    },1000)
   
})



