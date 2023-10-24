//for of loop
const arr=[1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}
//maps is a object
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America ");
for(const key of map){          //we get in the form of array
    console.log(key);
}
for(const [key,value] of map){
    console.log(key,":-",value);
}
// we use forof in case of maps



const myObj={
    js:'javascript',
    cpp:'cpp',
    rb:'ruby'
}               
for (const key in myObj) {                              //we use forin in case of objects
   console.log(` ${key} shortcut is for ${myObj[key]}`)
    }


// foreach loop is widely used in case of apis where there is array of objects
const myCoding=[
    {
        lngname:"javascript",
        filename:"js"
    },
    {
        lngname:"c++",
        filename:"c"
    }
]
myCoding.forEach((item)=> {
        console.log(item.lngname);    
});