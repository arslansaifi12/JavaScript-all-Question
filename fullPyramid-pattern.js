
let nst=1
let nsp=5

for(let i=1;i<=5; i++){

    for(let sp=1; sp<=nsp; sp++){
        process.stdout.write(" ")
    }

    for(let j=1; j<=nst; j++){
        process.stdout.write("*")
    }
    console.log();
    nsp--
    nst=nst+2
    
}

for(let i=1; i<=5; i++){
    for(let j=1; j<=10; j++){
        if (i==1) {
            if (j==5) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }

        if (i==2) {
            if ((j==4)||(j==6)) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }
        if (i==3) {
            if ((j==3)||(j==7)) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }
        if (i==4) {
            if ((j==2)||(j==8)) {
                process.stdout.write("* ")
                
            }else{
                process.stdout.write("  ")
            }
        }
        if (i==5) {
            if ((j==1)||(j==2)||(j==3)||(j==4)||(j==5)||(j===6)||(j==7)||(j==8)||(j==9)) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }
    }
    console.log();
    
}