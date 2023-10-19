/* 
Primitive types 
 7 types- String ,number,boolean,number,undefined,symbol(used for uniqueness),BigInt.
 called by call by value

Reference types(Non primitive)
 3 types- arrays,objects,functions 
Javascript is dynamically typed language.This means that variable types are determined at run type,on need not to declare the type
of a variable before using it */
const id=Symbol('123')
const id2=Symbol('123')
console.log(id);
console.log(id2);
console.log(id == id2); //false
console.log(id === id2); //false
const bigNumber=3456789000282333n //bigInt
console.log(bigNumber);
console.log(typeof bigNumber);  //bigint
console.log(typeof null);       //object

const hero=["shaktiman","naagraj","devraaj"];   //arrays in [] brackets
let myObj={                                     //objects in {} brackets with keys and values
    name:"Adarsh",
    age:22,
}
const myFunction=function(){
    console.log("Hello world")
}

console.log(typeof myFunction); //function
console.log(typeof myObj); //object
console.log(typeof hero);  //object




