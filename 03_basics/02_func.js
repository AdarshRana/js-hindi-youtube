function calCarPrice(...num1){           //rest operator
    return num1;
}
console.log(calCarPrice(200,400,500))

const user={
    username:"adarsh",
    price:200
}

function handle(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handle(user);   //we can also direct pass the object

const getarray2=[200,300,400];
function second(getarray){
    return getarray[1];
}
console.log(second([200,400,500]))