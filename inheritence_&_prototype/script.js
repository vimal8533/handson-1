const father = {
    talent:function(){
        console.log(`${this.name} and the age ${this.age}`);
    }

}


const son1=Object.create(father)
    son1.name="Vimal Kumar";
    son1.age="53"
    son1.talent()
const son2=Object.create(father)
    son2.name="Dabloo Kumar"
    son2.age=25
    son2.talent();



const Gfather={
    Hello:function(){
        console.log("Hello Grandfather")
    }
}

const father1=Object.create(Gfather);
    father.Hell0=function(){
        console.log("Hi to grand father")
    }
const you=Object.create(father1);
    you.hi=function(){
        console.log("hi");
    }



you.Hello();



Array.prototype.Calsum=function(){
    let sum =0;
    for(let i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}
const arr1=[12,36,98,74 ]
const arr2=[10,36,98,20]
const arr3=[1,2,3,4,5,6,7,8,9,10]

console.log(arr1.Calsum());
console.log(arr2.Calsum());
console.log(arr3.Calsum());


const obj1={
    Name:"Vimal Kumar",
    Age:25,
    Class:12,
    School:"Prepbytes"
}

console.log(Object.getOwnPropertyNames(obj1));

