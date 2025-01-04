//difference between the let and var

let a=10;// let is a local scope
console.log(a)

var b=10;// Var is a global scope
console.log(b)

//const
const c=20;// It is only accept the costant value 
console.log(c)

//Post Increment
var d=20;
var e=d++;
console.log(e)//output:20

//Post Decrement
var d=20;
var e=d--;
console.log(e)//output:20

//Pre Increment
var d=20;
var e=++d;
console.log(e)//output:21

//Pre Decrement
var d=20;
var e=--d;
console.log(e)//output:19

//Primitive datatype
console.log(typeof("geetha"))//string
console.log(typeof(10))//number
console.log(typeof(true))//boolean
console.log(typeof(null))//null
console.log(typeof("10"))// It's take string

//Basic function
function oppo(){
    console.log("This is samsung")
}
oppo()

//Function
var factor="Kamal"
var fplayer="Dhoni"
var fmovie="Anbe Sivam"

function favourite(){
        console.log("favourite actor:"+factor)
        console.log("favourite actor:"+fplayer)
        console.log("favourite actor:"+fmovie)
}
favourite()




