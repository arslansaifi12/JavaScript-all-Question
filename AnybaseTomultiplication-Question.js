

let decimaltoanybase=(num,base)=>{

    let ans=0
    let pow=1
    while (num>0) {
        
        let rem=num%base
        num=Math.floor(num/base)
        rem=rem*pow
        ans=ans+rem
        pow=pow*10
    }
    return ans
    
}
let anybasetomultiply=(num,num2,base,)=>{

    let multiplenum=num*num2

    let convertbase= decimaltoanybase(multiplenum,base)


    console.log(convertbase);
    

}

anybasetomultiply(67,56,5)



// console.log(67*56);

