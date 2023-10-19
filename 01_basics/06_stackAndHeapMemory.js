// stack and heap memory
/* stack memory is used for primitive data types
   heap memory is used for non-primitive data types */

//use of primitive data types where stack memory is created
let name1="Adarsh"
let name2=name1;
name2="Hitesh";

console.log(name1);  //Adarsh
console.log(name2);  //Hitesh

//use of reference data types where heap memory is created

let u1=
 {
   email : "abc.com",
   upi : 500,
 }
let u2=u1;
u2.email="cd.com";
console.log(u1);
console.log(u2);

