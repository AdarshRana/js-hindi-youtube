const coding=["jis","ruby","java","python","cpp"]
const values=coding.forEach((item)=>{
    console.log(item);
    //return item;  forEach does not return any value 
})

const myNums=[1,2,3,4,5,6,7]
const newNums=myNums.filter( (num) => num>4)   //if you use {} braces ,you need to return something 
console.log(newNums);
