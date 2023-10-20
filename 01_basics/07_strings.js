const name="Adarsh"
const age=22
console.log(name+age+" Hi");  //outdated format
console.log(`Hello my name is ${name} and my age is ${age}`); //back text is used  //string inter collation

const gameName=new String("Adarsh Rana")

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newSt=gameName.substring(0,4);
console.log(newSt)

const st2=gameName.slice(-8,4);
console.log(st2);

const ab="  Hello  "
console.log(ab.trim());   //trim removes the white spaces and new line terminators

const url="https://helloworld/programmning%20fun"
console.log(url.replace('%20','-'));    //used for replacing
console.log(url.includes('hellow'))     //check wheteher present or not
console.log(gameName.split(' '));       //split(separator,limit)

