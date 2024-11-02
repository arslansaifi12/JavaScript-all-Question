

function TwoSumTarget(arr , target) {

    for(let i = 0; i<arr.length; i++){

        for(let j=i+1; j<arr.length; j++){

            
        if (arr[i] + arr[j] == target ) {
            
           console.log(arr[i] , arr[j]);
           
        }
        }

    }

}
let rv = TwoSumTarget([1, 2, 3, 4,5, 6, 7],5)
console.log(rv);
