const marvelhero=["thor","ironman","spiderman"];
const dchero=["superman","flash","batman"];
//   marvelhero.push(dchero);  //pushes dchero within marvelhero like [.....,[....]]
//   console.log(marvelhero[3][1]);

//    const allhero=marvelhero.concat(dchero);    
//     console.log(allhero);
const allnewhero=[...marvelhero,...dchero];  //spread karta hai
console.log(allnewhero)

const a2=[1,2,[3,4],5,[6,7]];   //sablo aek hi array mein kar deta hai
const a3=a2.flat(Infinity);  
console.log(a3);

//Data scraping mein hw to use correct format of array
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));  //makes into arrray ['H','i','t','e','s','h']
console.log(Array.from({name:"hitesh"})); //interesting as it returns an [] array ,unable to find to convert key or the value to an array

let score1=100
let score2=200
let score3=300;

console.log(Array.of(score1,score2,score3));