
// anybase to subtraction


let decimaltoanybase=(num,base)=>{

    let ans=0
    let pow=1
while (num>0) {

    let rem=num%base
    num=Math.floor(num/base)
    rem=rem*pow
    ans=rem+ans
    pow=pow*10
}
return ans;

}




let anybasetosubtraction=(num,num2,base,)=>{

    if (num<num2) {
        let temp=num
        num=num2   //67
        num2=temp  //65
        
    }

    let multiplenum=num-num2

    let convertbase= decimaltoanybase(multiplenum,base)


    console.log(convertbase);
    

}
anybasetosubtraction(65,33,8)


// Second 

let num1=33
let num2=65
let base=8
let ans=0
let pow=1
let c=0

if (num1<num2) {
    let temp=num1
       num1=num2
       num2=temp
}

while (num1>0||num2>0) {
    let rem1=num1%10
    let rem2=num2%10

    num1=Math.floor(num1/10)
    num2=Math.floor(num2/10)

    if (rem1<rem2) {
        rem1=rem1+base
        num1=num1-1
    }
    let d=rem1-rem2
     d=d%base
    // c=d/base
     d=d*pow
    ans=ans+d
    pow=pow*10

}

console.log(ans);
