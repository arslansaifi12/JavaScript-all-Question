
let kthlargestelement = (arr)=>{
    let k = 4;
    let max=arr[0];
    let mini=arr[0];

    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){

            if (arr[i] >arr[j] ) {
                let temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
                
            }

        }
}
return arr[k-1];
}

let rv = kthlargestelement([7, 10, 4, 3, 20, 15]);

console.log(rv);
