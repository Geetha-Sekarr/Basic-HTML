const tatkalbook=new Promise((resolve,reject)=>{
    var book=false;
    if(book){
        resolve()
    }
    else
       reject()
})
tatkalbook.then(success)
.catch(failure)
function success(){
    console.log("Thanks buddy")
}
function failure(){
    console.log("Thanks for trying")
}

//promise type

let reachc=new Promise((resolve,reject)=>{
    var reached = true;
    if(reached)
        setTimeout(resolve,3000,"geetha reached")
    else
       reject("geetha not reached")
})

let reachd=new Promise((resolve,reject)=>{
    var reached = true;
    if(reached)
        setTimeout(resolve,3000,"prema reached")
    else
       reject("geetha not reached")
})

let reache=new Promise((resolve,reject)=>{
    var reached = true;
    if(reached)
        setTimeout(resolve,3000,"indhu reached")
    else
       reject("geetha not reached")
})
Promise.all([reachc,reachd])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))