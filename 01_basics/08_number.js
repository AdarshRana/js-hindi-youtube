const score=400;            //output will be simply 400
const bal=new Number(100);  //output is [Number: 100]
console.log(score);
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2));  //fixes to two decimal 

const num=123.897
console.log(num.toPrecision(3));  ///124

const num2=1123.897
console.log(num2.toPrecision(3)); //1.12e+3

const hund=10000000;
console.log(hund.toLocaleString());  //returns according to US standards

const hund2=10000000;
console.log(hund2.toLocaleString('en-IN'));  //returns according to India standards