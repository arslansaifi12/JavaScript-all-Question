
// //Integer Reversal 

// function integerrevesal(num) {
// let temp=num
// let nod=0
// let k=2

// while (temp>0) {
//     let rem=temp%10
//     temp=Math.floor(temp/10)
//     nod++
// }
// // console.log(nod);

// if (k<0) {
//     k=k+nod;    
// }

// let div=1
// let mult=1

// for(let i=1; i<=nod; i++){
//     if (i<=k) {
//         div=div*10   
//     }else{
//         mult=mult*10
//     }
// }

// let ans=1;

// let numld=num%div
//  let qt=Math.floor(num/div)


// ans=numld*mult+qt

// console.log(ans);

// }

// integerrevesal(12345)



let arr=[1,2,3,7,6]
let arr2=[]
end=arr.length
// console.log(end);

for(let i=end; i>=0; i--){

    if (end==arr[i]||end-1==arr[i]) {
        arr2=arr[i]
        console.log(arr2);
    }
}

// console.log(arr2);
