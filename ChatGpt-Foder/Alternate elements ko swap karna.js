


let AlternateElementSwap = (arr) => {

    for(let i=0; i<arr.length; i=i+2){

    for(let j=i+1; j<arr.length; j++){

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        break;
    }
   

    }

    return arr;
}

let rv = AlternateElementSwap([1, 2, 3, 4, 5, 6]);
console.log(rv);

