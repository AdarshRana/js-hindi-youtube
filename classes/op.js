const user={
    username:"adarsh",
    login:8,
    signIn:true,
    getUserDetails:function(){
        console.log("Got user details");
        console.log(`Username:${this.username}`); //this is used for current context
      //  console.log(this) //current context
    }
}
console.log(user.username);
console.log(user.getUserDetails());
// console.log(this) //not any current context

//const p1=new Promise() //new is a constructor function
//const date=new Date() //new creates a new context

function User(username,logincount,isLogin){
    this.username=username    //this.username is a new variable
    this.logincount=logincount
    this.isLogin=isLogin
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;//returns current user 
}

const user1=User("adarsh",12,true);
const user2=User("Raman",15,true);
//console.log(user1);   //its printing user2 details,to avoid it use new keyword

const userone=new User("adarsh",12,true);
const usertwo=new User("Raman",15,true);
console.log(userone); //returns correct value of userone . 
