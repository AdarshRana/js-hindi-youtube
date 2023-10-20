let myDate=new Date();
console.log(myDate);  //generates a different format date
console.log(myDate.toString()); //generates a comparatively good format date
console.log(myDate.toDateString());
console.log(myDate.toISOString());  
console.log(myDate.toLocaleDateString()); 

console.log(typeof myDate);  //object type

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let myCreatedDate2=new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString())

let d2=new Date("2023-01-23")
console.log(d2.toLocaleString())

let d3=new Date("01-14-23")
console.log(d3.toLocaleString())

let myTimeStamp=Date.now()    //date from 01 jan,1970 in mili seconds
console.log(myTimeStamp)                   

console.log(d3.getTime());

console.log(Math.floor(Date.now()/1000))  //to convert into seconds

let newd=new Date()
console.log(newd);
console.log(newd.getMonth()+1);

console.log(newd.toLocaleString('default',{weekday:"long"}))


