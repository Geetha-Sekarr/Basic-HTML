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

