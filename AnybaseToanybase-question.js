//Anybse TO decimal

let anybasetodecimal=(num,base1)=>{

    let ans=0
    let pow=1

    while (num>0) {
        let rem=num%10
        num=Math.floor(num/10)
        rem=rem*pow
        ans=ans+rem
        pow=pow*base1
        
    }
     return ans;
    
}

// anybasetodecimal(67,8)


//decimal to anybase


let decimaltoanybase=(num,base2)=>{

    let ans=0
    let pow=1
    while (num>0) {
        
        let rem=num%base2
        num=Math.floor(num/base2)
        rem=rem*pow
        ans=ans+rem
        pow=pow*10
    }
    return ans
    
}
// decimaltoanybase(55,2)


let anybasetoanybase=(num,base1,base2)=>{

    let decimalnumber=anybasetodecimal(num,base1)

    let convertbase=decimaltoanybase(decimalnumber,base2)

console.log(convertbase);

}

anybasetoanybase(99,10,2)



