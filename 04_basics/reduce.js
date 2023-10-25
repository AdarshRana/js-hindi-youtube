const arr=[1,2,3,];

const myTot=arr.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval;
},0)
console.log(myTot);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python",
        price:999
    },
    {
        itemName:"mobile dev",
        price:5999
    },
    {
        itemName:"data scientist",
        price:12999
    },
]
const price=shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(price);