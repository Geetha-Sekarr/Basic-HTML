var s1="JAVASCRIPT IS VERY EASY TO LEARN"
var s2="Hello Learn with me friendly Hello"

//1.charAt()
console.log(s1.charAt(5));

//2.charCodeAt()
console.log(s1.charCodeAt(5));

//3.concat
console.log(s1+s2);
console.log(s1.concat(s2));

//4.endswith() and startswith()
console.log(s1.startsWith("J"))
console.log(s2.endsWith("y"))
console.log(s1.startsWith("j"))
console.log(s2.endsWith("n"))

//5.fromCharCode()
console.log(String.fromCharCode(83));

//indexOf()
console.log(s2.indexOf("Hello"));

//lastIndexOf()
console.log(s2.lastIndexOf("Hello"))

//match()
console.log(s2.match(/Hello/g));


//Arrow functions
let add = (a, b) => a + b;
console.log(add(3, 2));

//default parameters
const g = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}
g( 10, 20 );

//Single parameters
const square = x => x*x;
console.log(square(4));

//replace method
let str = "apple, banana, apple, orange";
str.replaceAll("apple","geetha");

//filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

//filter normal method
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = num.filter(num => num > 5);
console.log(a);

//map method
const b = [1, 2, 3, 4, 5];
const c = b.map(number => number * 2);
console.log(c);

//reduce method
const h = [1, 2, 3, 4, 5];
const total = h.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;//accumulator=0 currentvalue=1 =>0+1=1
  //accumulator=1 currentvalue=2 =>1+2=3
  //accumulator=3 currentvalue=3 =>3+3=6
  //accumulator=6 currentvalue=4 =>6+4=10
}); 
console.log(total); 

//reduceright array methods
const strArray = ['a', 'b', 'c', 'd'];
const reversedStr = strArray.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(reversedStr);


//
const v = [1, 2, 3, 4, 5];
const sum = numbers.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

//sort methods
const d = [5, 3, 8, 1, 2];
d.sort((a, b) => a - b);
console.log(d); 

//string order sort methods
const e=["mango","apple","grapes","kiwi"]
e.sort();
console.log(e)

const n = [5, 3, 8, 1, 2];
n.sort();
console.log(n); 

function great(lastname){
  console.log("hello,"+lastname);
}
great("geetha");