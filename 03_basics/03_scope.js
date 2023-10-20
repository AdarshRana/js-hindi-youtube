//this concepts originates from let,var,cons keywords
let a=30
if(true){
    let a=10
    const b=20
    var c=30
    d=40
    console.log("Inner: ",a)
}
console.log("Outer:",a);
// console.log(a);  wrong,out of scope
// console.log(b);  wrong ,out of scope
console.log(c);   // should be wrong,however gives output 30 ;var has issue of scope
console.log(d);   //should be wrong ,however gives output


