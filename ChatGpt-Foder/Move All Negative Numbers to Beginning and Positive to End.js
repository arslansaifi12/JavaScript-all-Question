

function startnegativenumber(arr) {

    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){

            if (arr[j] < 0) {

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;   
                break; 

            }
          
        }
    }
    return arr;
}

let rv = startnegativenumber([1, -1, 3, -2, -7, 4, -5, 6])
console.log(rv);