

// let checkprimeNum=(num)=>{
//     let nof=0

// for(let i=2; i*i<=num; i++){

//     if (num%i==0) {
//         nof++
//         break;
//     }
// }

// if (nof==0) {
//     console.log("it is prime no.",num);
    
// }else{
//     console.log("it is not prime no.");
// }

// }

// checkprimeNum(9)



let num=4321
let ans=0
 
while (num>0) {
    let rem=num%10
    num=Math.floor(num/10)
    
    ans=ans*10+rem
}


console.log(ans);