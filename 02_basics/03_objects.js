const mySym=Symbol("key1");

const JsUser={name:"Adarsh",
age:22,
location:"Gurgaon",
[mySym]:"mykey1",            //for symbol data type use []
email:"abc.com",
isLogIn:false,
lastLogIn:["Monday","Tuesday"]
};

JsUser.email="efg.com";
//Object.freeze(JsUser);
//if we change any value,it won't be affected in the object ,it won't show any error but the value won't be changed

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);   //symbols are generally accesed using []

JsUser.greetings=function(){
    console.log("Hello Js user");
}
console.log(JsUser.greetings());

JsUser.greetings2=function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greetings2());