///for-each loop(Bassis)

// const coding = ["js", "php","c++","java","javascript"]

// const value = coding.forEach( (items) => {  //for-each loop koi v value nu return nhi dindi//
//     // console.log(items);
    
// })
// console.log(value);

//jdo kise value nu return krna hove od asi (FILTER operation) use krde ha//
const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const newnumber = mynumber.filter( (nums) => nums  > 5)
// console.log(newnumber);

// const newnumber = mynumber.filter( (nums) => { //(je asi scope da use kra geb ta return di lod pve gi )
//      return nums  > 5
//     })

const newnumber = [] ///return value trick use in for-each///
mynumber.forEach( (nums) =>{
    if (nums  > 4){
        newnumber.push(nums)
    }
})

console.log(newnumber);




