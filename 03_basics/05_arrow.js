const user={
    username:"Adarsh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
//user.welcomeMessage()
user.username="sam"
console.log(this);

function chai(){
    console.log(this);
}
chai();

const chaai=() =>{
    let username="hitesh"
    console.log(this);
}
chaai();

const addTwo=(num1,num2) =>{                //explicitly returned function
    return num1+num2;
}
console.log(addTwo(3,4))

const addThree=(num1,num2,num3) =>num1+num2+num3     //implicitly returned function  
//if curly braces used,return statement is used.. else retyurn statement is not written

console.log(addThree(2,3,4));

const objReturn=(num1,num2) =>({username:"adarsh"});  //object is passed using ({}) only...
console.log(objReturn(5,5,6));