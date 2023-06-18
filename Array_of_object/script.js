let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]


    studentRecords.map((item) =>{
        console.log(item.name.toUpperCase());
    })




    studentRecords.map((item) =>{
        if(item.marks>50){
            console.log(item);
        }
    })



    studentRecords.map((item) =>{
        if(item.marks>50 && item.id>120){
            console.log(item);
        }
    })

let totalmarks=studentRecords.reduce((pre,cur)=>{

    return pre+=cur.marks
},0)
console.log(totalmarks);


studentRecords.map((item)=>{
    if(item.marks>50){
        console.log(item.name);
    }
})


// studentRecords.map((item)=>{
//     let sum=0;
// if(item.id>120){

//     let totalmarks=item.reduce((pre,cur)=>{

//         return pre+=cur.marks
//     },0)
//     console.log(totalmarks);
// }

// })


function markssum(record){
let sum=0
for(let i=0 ; i<record.length;i++){
    if(record[i].id>120){
        sum+=record[i].marks;
    }
}
return sum
}


console.log(markssum(studentRecords));



function markssum50(record){
    let sum1=0
    for(let i=0 ; i<record.length;i++){
        if(record[i].marks>50){
            sum1+=record[i].marks;
        }else if(record[i].marks<50){
            sum1+=record[i].marks+15
        }
    }
    return sum1
    }
console.log(markssum50(studentRecords));



const object=[
{name:"Vimal",class:10,rollno:20},
{name:"Vimal",class:10,rollno:20},
{name:"Vimal",class:10,rollno:20},
{name:"Vimal",class:10,rollno:20},
{name:"Vimal",class:10,rollno:20},
{name:"Vimal",class:10,rollno:20}
]
console.log(object)