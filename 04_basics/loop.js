//for loop
for(let index=0;index<10;index++){
    const element=index;
    console.log(element);
}
//break is used to terminate the smallest enclosing for,while,do while loop and execution resumes at the 
// statement immediately following the loop body

//continue statement skips next of the looping statements and causes the next iteration of the loop

let myarr=['flash','batsman','superman'];
let arr=0;
while(arr<myarr.length){
    console.log(`Value is ${myarr[arr]}`);
    arr++;
}

let score=1;
do{
    console.log(`Score is ${score}`);
    score++;
}while(score<=10);