let original = {
    name: "myname",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
};
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "geetha";
console.log(original.address.city); 
console.log(deepCopy.address.city);


//shallow copy
let origina = {
    name: "myname",
    age: 30,
    address: {
        city: "chennai",
        zip: "10001"
    }
};
let shallowCopy = Object.assign({}, original);
shallowCopy.address.city = "sekar";
console.log(original.address.city);
console.log(shallowCopy.address.city); 