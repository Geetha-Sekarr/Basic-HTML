var reachedb=new Promise((resolve,reject)=>{
    var reached= true;
    if(reached)
        setTimeout(resolve,3000,"geetha reached")
    else
      reject("geetha not reached")
})
async function asyncstatus(){
    try{
        console.log("hi")
        res=await reachedb
        console.log(res)
    }
    catch(err){
        console.log(err)
    }   
}
asyncstatus()