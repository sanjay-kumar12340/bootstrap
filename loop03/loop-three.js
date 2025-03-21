///for of loop /////  ehh loop arry de throw jada km krdia hn

// const arr = [1,2,3,4,5]

// for (const number of arr) {
//     console.log(number);
    
    
// }
// const greets = "hallo sanjay"
 
// for (const greetword of greets) {
//     console.log(`string is ${greetword}`);
    
    
// }
////maps/////ess vich dupclicate value dubara run nhi kr skdi hrr value uniqe
const map1 = new Map()
map1.set("pu" ,"punjab")
map1.set("HR" ,"Hariyana")
map1.set("HP" ,"Himachal perdesh")
map1.set("RJ" ,"Rajashthan")

// console.log(map1);
for (const [anykey,value] of map1) {  //ess treke nal asi key and value nu alag alag likh skde ha(map use in for-of)
    console.log(anykey,":-",value);
       
}

// const myobject = { //for of loop vich objecjt nhi chlda (it work on for in loop ) 
//     game1:"MMA",
//     game2:"UFC"
// }
// for (const [key,value] of myobject) {
//     console.log(key,":-",value);
    
    
// }
