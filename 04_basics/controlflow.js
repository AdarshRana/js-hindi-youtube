if(true){
    console.log("True");
}
else{
    console.log("False");
}

//null coalescing operator
val=5??10;
console.log(val);  //output is 5
val1=null??10;
console.log(val1); //output is 10
val2=undefined ??20;
console.log(val2); //output is 20
val3=10 ??20;
console.log(val3); //output is 10
 val4=null??undefined;
console.log(val4); //output is undefined
