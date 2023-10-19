let val=5
let negval=-val;
console.log(val+val);
console.log(val-val);

console.log(val*val);
console.log(val**val);

console.log(val/val);
console.log(val%val);


//strings
let st1="Adarsh"
let st2="Rana"
console.log(st1+st2);

console.log("1" +2); 
console.log(1+"2")
console.log("1" + 2 +2);
console.log(1 + 2 +"2");  //mainly depends on the first value data type
//try to use brackets for readability.

let gameCounter=100;
gameCounter++;   //
console.log(gameCounter)

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0); //true
//the reason is that an equality check == and comparisons < > <= >= works differently.Comparisons convert null to a number
// treating it as zero.That's why third line is true and second line false.

console.log(undefined>0) //false
console.log(undefined==0) //false
console.log(undefined>=0); //false

console.log("2" ===2); //false  as it also checks the data types.


