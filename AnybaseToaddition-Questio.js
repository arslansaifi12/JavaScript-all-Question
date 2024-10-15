
let anybasetoaddition=(num1,num2,base,c)=>{

    let ans=0
    let pow=1
    

    while (num1>0 || num2>0|| c>0) {
        let rem1=num1%10
        let rem2=num2%10
        num1=Math.floor(num1/10)
        num2=Math.floor(num2/10)

        let d=rem1+rem2+c;
        c=Math.floor(d/base)
        d=d%base
        d=d*pow
        ans=ans+d
        pow=pow*10

        
    }
    console.log(ans);
    
}

anybasetoaddition(67,57,8,0)