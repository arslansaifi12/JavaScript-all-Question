

let arr = [3, 5, 1, 2, 4];

let maxMini = ( arr)=>{

    let max = arr[0];

    let mini = arr[0];

    for(let i = 0; i<arr.length; i++){

        if (max < arr[i]) {

            max = arr[i];
            
        }
        if (mini > arr[i]) {
            
            mini = arr[i];
        }
    }

    console.log(max , mini);
    

}

let rv = maxMini([3, 5, 1, 2, 4])

console.log(rv);
