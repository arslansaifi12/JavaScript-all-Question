let str="ABFCACDB"
let result=""
for (let i=0; i<str.length; i++){
    if ((result==0) || (result[result.length-1]!=str[i])) {

        result=str[i]
        
    }
    
}

console.log(result.length);

 