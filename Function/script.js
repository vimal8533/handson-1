function nameage(name, age){

    return `My name is ${name} and my age is ${age}`
}

console.log(nameage("Vimal kumar", 23));


function sum( num1 ,num2){
    return num1+num2;
}
let num1=3;
let num2=4;
console.log(`The sum of ${num1} and ${num2} is ${sum(num1,num2)}`);


const multiple=(a,b)=>{
    return a*b;
}
let c=5;
let d=12;
console.log(`The multiple of ${c} ans ${d} is ${multiple(c,d)}`);

var x = 21;
    let girl = function () {
        console.log(x);
        var x = 20;
    };
    girl ();
   
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };

var x = 21;
    a();
    b();
    
      function a() {
        
       x = 20;
      console.log(x);
    };
     function b() {
        
        x = 40;
       console.log(x);
    };
    


    function fact(n){
        if(n<=1){
            return 1;
        }else{
            return n*fact(n-1);
        }
    }
    console.log(fact(0));
    function FindSum(a, b){
        return a + b;
    }
    
    function DisplayData(data, batch){
        console.log(`i am from ${data} and My batch is EA${batch}`)
    }
    
    DisplayData("PrepBytes", FindSum(10, 9));
    var a = 10;
    (function (){
        console.log(a);
        var a = 20;
    })();

    const greet =  function(name){
        return function(m){
        
            console.log(`Hi!! ${name}, ${m}`);
        }
    }
      
    const greet_message = greet('EA19');
    greet_message("Welcome To PrepBytes");
    Abc();
    const Abc = function(){
        let value = 20;
        console.log(value);
    }

