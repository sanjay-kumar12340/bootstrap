//////Reduce////
const mynums = [1,2,1,4,5] //

// const mytotal = mynums.reduce( function(acc, currval){
//     console.log(`acc${acc} currval${currval}`);  // ehh proper pta krn li k puri value kis process nal a ry a

//     return acc + currval
// }, 0)
// console.log(mytotal);

/////reduce use in arrow function////////
const mytotal = mynums.reduce( (acc , currval)=>(acc + currval),0)
//console.log(mytotal);

const mycourse =[
    {
        cours:"js",
        price:2999
    },
    {
        cours:"Dsa",
        price:299
    },
    {
        cours:"php",
        price:999
    },
    {
        cours:"py",
        price:299
    },
]

 const pricetopay = mycourse.reduce( (acc,carditem) =>  (acc + carditem.price),0)
 console.log(pricetopay);



 let countnum = [1,2,3,4]

 const mytotl = countnum.reduce(function(accu,currentval) {
    return accu + currentval
 }
 )
 
console.log(mytotl);
