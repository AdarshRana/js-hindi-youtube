const a=[0,1,2,3,4];
const myHero=["shaktiman","naagraj"];

const a2=new Array(1,2,3,4,5)
console.log(a2[1]);

//Arrays methods
a2.push(7); //pushes to last place
a2.pop(); //pops last element
a2.push(6);

a2.unshift(10); //shifts to the last place
console.log(a2);

a2.shift(); //removes first place element

console.log(a2.indexOf(9));
console.log(a2.includes(3));

const newarr=a2.join(); //converts array to string
console.log(a2);   //data tpe of a2-array
console.log(newarr); //data type of newarr-string

//slice
console.log("A",a2);
const newa2=a2.slice(1,3); //includes 1st and 2nd ,last range not included
console.log(newa2);
console.log("B",a2);

//splice
const newa3=a2.splice(1,3); //includes 1st and 2nd and 3rd element also
console.log(newa3);  
console.log("B",a2);   //main diffence between slice and splice is that splice changes and manipulates the original array


