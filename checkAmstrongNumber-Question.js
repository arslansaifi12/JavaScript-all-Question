
// Check Amstrong Number

function checkamstrongnum(num) {
let temp=num
let temp2=num
let ans=0
let nod=0

while (temp>0) {
    let ld=temp%10
    temp=Math.floor(temp/10)
    nod++
    
}
// console.log(nod);


while (num>0) {
    let ld=num%10
    num=Math.floor(num/10)
     let dp = Math.pow(ld,nod)
    ans=ans+dp
    
}
// console.log(ans);

if (ans==temp2) {
    console.log("it is amstrong number",temp2);
    
}else{
    console.log("not amstrong number",temp2);
    
}

    
}

checkamstrongnum(153)