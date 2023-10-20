function sayname(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("S")
}
sayname()

function addTwoNumb(num1,num2){    //parameters
    console.log(num1+num2)
}

addTwoNumb(3,5);    //arguments

function addTwoNum(numb1,numb2){    //parameters
    let result=numb1+numb2;
    return result;
}

const res2=addTwoNum(3,5); 
console.log("Result is ",res2);

function loginUser(username){               //we can also give a default value
    if (username===undefined){              //or use if(!username) //as undefined is assumed to be false and also empty string is assumed to be false
        console.log("Invalid");
        return;
    }
    return `${username} just loggged in`
}
console.log(loginUser("adarsh"));    // if no value is passed ,its undefined.else check using if else 