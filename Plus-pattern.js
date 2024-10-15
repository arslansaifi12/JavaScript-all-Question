

for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==1) {
            if (j==3) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }

        if (i==2) {
            if (j==3) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }

        if (i==3) {
            if ((j==1)||(j==2)||(j==3)||(j==4)||(j==5)) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }

        if (i==4) {
            if (j==3) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }

        
        if (i==5) {
            if (j==3) {
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }
    }
    console.log();
    
}


