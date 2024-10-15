//Decimal to anybase

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
console.log(ans);

}
decimaltoanybase(38,8)
