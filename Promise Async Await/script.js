function sum(a,b){
    return a+b;
}
function myDetails(name,age){
    return `My name is ${name} and The age is ${age}`;
}
let ans =myDetails("Vimal Kumar",sum(10,13));
console.log(ans);
 function callback(){
   setTimeout(()=>{
        print(1);
        setTimeout(()=>{
            print(2);
            setTimeout(()=>{
                print(3);
                setTimeout(()=>{
                    print(4);
                    setTimeout(()=>{
                        print(5);
                        setTimeout(()=>{
                            print(6);
                            setTimeout(()=>{
                                print(7);
                            },1000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}

const print=(n)=>{
    console.log(n);
}
callback()


function promis(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })   
}
function promis1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(2)
        }, 2000);
    })   
}
function promis2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(3)
        }, 3000);
    })   
}
function promis3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(4)
        }, 4000);
    })   
}
function promis4(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(5)
        }, 5000);
    })   
}
function promis5(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(6)
        }, 6000);
    })   
}
function promis6(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(7)
        }, 7000);
    })   
}

promis().then((data)=>{
    console.log(data);
    return promis1();
}).then((promis1)=>{
    console.log(promis1);
    return promis2();
}).then((promis2)=>{
    console.log(promis2);
    return promis3();
}).then((promis3)=>{
    console.log(promis3);
    return promis4();
}).then((promis4)=>{
    console.log(promis4);
    return promis5();
}).then((promis5)=>{
    console.log(promis5);
    return promis6();
}).then((promis6)=>{
    console.log(promis6);
})


function sample(n){
    return new Promise((resolve, reject) => {
        if(n%2==0){
            resolve(`${n} is even number`)        
        }else{
            reject(`${n} is not even number`)
        }
    })
}

sample(11).then((data)=>{
    console.log("See the answer:",data)
}).catch((data)=>{
    console.log("See the answer:",data)
})




function discount(sp,dis){
    return Math.floor(sp*((dis)/100));
}
function mainprice(sp,dsprice){
    return sp-dsprice;
}
console.log(`The Final Price after discount ${mainprice(1000,discount(1000,10))}`);





function callbackhell(){
    setTimeout(()=>{
         print1("V");
         setTimeout(()=>{
             print1("I");
             setTimeout(()=>{
                 print1("M");
                 setTimeout(()=>{
                     print1("A");
                     setTimeout(()=>{
                         print1("L");
                         setTimeout(()=>{
                             print1("K");
                             setTimeout(()=>{
                                 print1("r.");
                             },1000)
                         },6000)
                     },5000)
                 },4000)
             },3000)
         },2000)
     },1000)
 }
 
 const print1=(n)=>{
     console.log(n);
 }
 callbackhell()



async function fetchdata(){
    const response=await fetch('https://api.github.com/users');

    const data= await response.json;
    console.log(response)
    

}
fetchdata()

Promise.all([promis(),promis1(),promis2(),promis3(),promis4(),promis5(),promis6()]).then((data)=>{
    console.log(data)
})