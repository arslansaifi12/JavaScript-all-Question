

function uniqueElement(arr) {
    
    let singleElement = [];



    for (let i=0; i<arr.length; i++){
        let count = 0;

        for (let j=0; j<arr.length; j++){

            if ( arr[i] == arr[j] ) {

                count++;
                
            }

          
        }
        if (count === 1) {
            singleElement.push(arr[i])
           }
    }

    return singleElement;
}

let rv = uniqueElement([3, 7, 2, 2, 7, 3, 4]);

console.log(rv);

