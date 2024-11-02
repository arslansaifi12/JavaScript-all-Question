

function GroupAnagram(arr) {

    let nayaarr = []

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            
            if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
            }

        }
    }

    return arr;

};

let rv = GroupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);


console.log(rv);

