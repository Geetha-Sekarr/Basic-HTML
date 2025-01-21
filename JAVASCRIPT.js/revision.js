let reachd= new Promise((resolve,reject)=>{
   var book=true;
   if(book){
    setTimeout(resolve,3000,"geetha reached")
   }
   else
    reject("geetha is not reached");
})

async function asyncstatus(){
    try{
        console.log("hii");
        resss=  await reachd;
        console.log(resss);
    }
    catch(error){
        console.log(error);
    }
}