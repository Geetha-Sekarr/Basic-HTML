let reachedb=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached)
        setTimeout(resolve,3000,"a to b successfully booked")
    else
      reject("a to b failed")
})
let reachedc=new Promise((resolve,reject)=>{
    const reached=false;
    if(reached)
        setTimeout(resolve,3000,"b to c successfully booked")
    else
      reject("b to c failed")
})
let reachedd=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached)
        setTimeout(resolve,3000,"c to d successfully booked")
    else
      reject("c to d failed")
})
Promise.allSettled([reachedb,reachedc,reachedd])
.then(()=>console.log("a to d successfully booked"))
.catch((message)=>console.log(message))

// async function asyncstatus(){
//     try{
//         ress= reachedb
//         console.log(ress)
//         // return 0;
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// asyncstatus()

const person = { name: "Alice" };  
const job = { role: "Developer" }; 
const result={...person,...job};
console.log(result);

class person2{
   
}