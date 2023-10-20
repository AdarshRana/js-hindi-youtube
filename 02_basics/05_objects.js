const course={
    name:"js in hindi",
    price:"999",
    Inst:"hitesh"
}
//one way to accesss is course.Inst;
//another way that is destructuring of object
const{Inst}=course
console.log(Inst);

const{Inst:i}=course
console.log(i);

/* JSON format ,where object does not have a name and the key values are in string format
 {
    "name": "adarsh",
    "age":"18",
    "price":"free"
 }

 Data can be fetched using different APIs randomuser me.api is one of the site 
 JSON formatter is one of the tool where we can get good readability of JSON 