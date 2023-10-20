function one(){
    const user="adarsh"
    function two(){
        const website="youtube"
        console.log(user);
    }
    two()
}
one()
 
if(true){
    const u="adarsh"
    if(u==="adarsh"){
        const webs="rana"
        console.log(u+webs)
    }
}
console.log(addOne(9));  //correct
function addOne(num){          //function sometimes called expressions ,it can hold json value,function
    return num+1
}
// addTwo(8) cannot be declared before function declaration when used this way ,hoisting

const addTwo=function(num){          //function sometimes called expressions ,it can hold json value,function
    return num+2
}
addTwo(5)