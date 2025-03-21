/////////loop maps (Bassis)

const mynumber = [1,2,3,4,5,6,7,8,9,10]

 //const newnumber = mynumber.map( (num)=>num + 10)
 //console.log(newnumber);

//////////this run code in  for-each////

const newnumber = []
mynumber.forEach ((num)=>{
    if (num > 5) { // ess vich dsya hai ki num vich jo value grater then hai 5 se vo e show ho //
        newnumber.push(num + 10)
        
    }

})

console.log(newnumber);

/////////////chaning sytm/////////

// const mynumber = [1,2,3,4,5,6,7,8,9,10]
 
// const newnub = mynumber.map( (num)=> num * 10) 
//                         .map( (num)=> num + 10) 
//                        // .map( (num)=> num >= 41) 
//                         .filter( (num)=> num >= 41)  //in this case 41 to up values alow////


//console.log(newnub);
