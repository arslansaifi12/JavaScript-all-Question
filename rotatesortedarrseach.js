
// find target rotate sorted arr for binary search

let  rotatesortedarr = (arr,target) => {


    let low = 0;
    let high = arr.length-1;
    
    
    while (low<=high) {
    
        let mid = Math.floor((low+high)/2);
    
        if (target == arr[mid]) {
            return true;
        }
    
        if (arr[low]<arr[mid]) {
    
            if ((target>=arr[low]) && (target<=arr[mid])) {
    
                high = mid-1;
                
            }else{
                low = mid+1;
            }
    
    
        }else if (arr[mid]<arr[high]){
    
            if ((target<=arr[high]) && (target>=arr[mid])) {
    
                low = mid+1;
                
            }
            
    
        }else{
            high= mid-1;
        }
        
    }
    return -1;
        
    }
    
    let rv = rotatesortedarr([1,2,3,4,5,4],4)
    
    console.log(rv);
    