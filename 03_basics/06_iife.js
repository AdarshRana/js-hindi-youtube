(function help(){
    console.log(" Help ");
})();   //semicolon is used when we need to end the context of iife ...

( (name) => {
    console.log(`DB connected ${name}`);
})("Adarsh")
