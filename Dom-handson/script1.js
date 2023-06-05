let ans=document.getElementsByTagName("h1");
let chance=document.getElementsByTagName('h4')
let randomnum=Math.floor(Math.random()*100+1);
let input_value=document.querySelector('input');
let boxthre=document.getElementById('boxthree');
let color=document.getElementById('input1');
let count=100;
console.log(ans);
function numbercheck(){
    // ans[3].innerHTML="Your Guess Is Low";
    document.body.style.backgroundColor="rgb(97, 39, 39)"
    color.style.backgroundColor="rgb(97, 39, 39)";
    if(randomnum>input_value.value){
        ans[2].innerText="Your Guess Is Low";
        count--;
        chance[0].innerText="💯 Chances:"+count;
    }else if(randomnum<input_value.value){
    ans[2].innerText="Your Guess Is High";
    count--;
    chance[0].innerText="💯 Chances:"+count;
    }
    else{
        ans[2].innerText=" 🤩🤩 Hurray You Won 🤩🤩";
        boxthre.innerText=randomnum;
        count--;
        chance[0].innerText="💯 Chances:"+count;
        chance[1].innerText="🥇 Highscore:"+count;
        document.body.style.backgroundColor="green";
        color.style.backgroundColor="green";
        
    }
    if(count==0){
        ans[2].innerText="Game Over 🙂 🙂 your score is 0";
        
    }
}


       



