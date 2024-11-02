

function UnionAndIntersectionofTwoSortedArrays(arr1 , arr2) {

    let mergearr = arr1.concat(arr2)
    
    let newarr = [];

    for(let i = 0; i<mergearr.length; i++){
        let isunique = true;
        for(let j=i+1; j<mergearr.length; j++){

            if (mergearr[i] == mergearr[j]) {
                isunique = false;
                
            }
           
        }
        if (isunique) {
            newarr[newarr.length] = mergearr[i];
            
        }

    }

    for(let i = 0; i<newarr.length; i++){
        for(let j= i+1; j<newarr.length; j++){
            if (newarr[i] > newarr[j]) {
                
                let temp = newarr[i];
                newarr[i] = newarr[j];
                newarr[j] = temp;   
                
            }
        }
    }

    return newarr;
}

let rv = UnionAndIntersectionofTwoSortedArrays([1, 3, 4, 5, 7], [2, 3, 5, 6]);
console.log(rv);
