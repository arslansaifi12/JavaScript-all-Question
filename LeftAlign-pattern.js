

let nst1=5
nst2=1
for(let i=1; i<=10; i++){
   if (i<=5) {
    for(let j=1; j<=nst1; j++){
        process.stdout.write("*")
    }
    nst1--
   }
    if (i>=5) {
        for(let j=1; j<=nst2; j++){
            process.stdout.write("*")
        }
        nst2++ 
    }
    console.log()
    
    
}