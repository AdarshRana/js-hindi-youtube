//objects using constructors -singletons
const tinder=new Object();
console.log(tinder);

const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Sunny";
tinderUser.isLogIn=false;
console.log(tinderUser);

const regUser={
    email:"abc.com",
    fullname:{
        userfullname:{
            firstname: "Adarsh",
            lastname: "Rana"
        }
    }
}
console.log(regUser.fullname.userfullname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
//const obj3={obj1,obj2};
const  obj3=Object.assign({},obj1,obj2); //generally use {} ;not necessary 
console.log(obj3)
const obj4={...obj1,...obj2}     //spreading format
console.log(obj4);

//to get the value from datatbases ,we usually get array of objects

const users=[
    {
        id:1,
        email:"hello.com"
    },
    {
        id:2,
        email:"hi.com"
    },
    {
        id:3,
        email:"def.com"
    }
]
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLogIn'));
