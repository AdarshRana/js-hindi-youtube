//fetch('https://something.com').then().catch().finally(); //then mein response,catch mein error aur finally mein sab kuch aa jayega
const pone=new Promise(function(resolve,rejec){
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
}) 
pone.then(function(){
    console.log("Promise consumed");
}) //resolve ka connection hai .then() ke saath

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved ");
})

//3rd promise
const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

p3.then(function(user){
    console.log(user);
})

//promise 4

const p4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"hitesh",password:"1234"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
p4.then( (user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{           //chaining for rejection,.then() as return is used 
     console.log(username)
}).catch(function(error){        //chaining for error,.catch()
    console.log(error);
}).finally( ()=>console.log("The promise is either resolved or rejected."))

//promise 5 using async await
const p5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"1234"})
        }
        else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

async function consumep5(){
    try{
        const response=await p5;
    console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumep5()

async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json();  //await is used to reduce time taken to perform a particular task
    console.log(data);
    }
    catch(error){
        console.log("ERROR")
    }
}
// getAllUsers();


//another way using then,catch
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) =>{
    return response.json()
})
.then( (data)=>{
    console.log(data);
})
.catch( (error)=> console.log(error))