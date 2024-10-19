let arr = [[1,3],[2,6],[8,10],[15,18]]

let overlapping=[]

for (let i=0; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
        if (arr[i][1]>arr[j][0]) {
            let temp= arr[i][1]
            arr[i][1]=arr[j][1]
            arr[j][1]=temp
            
        }
    }
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        
    if (arr[j][0] >arr[i][1]) {

        overlapping[overlapping.length]=arr[j]
    }

    }
    
    break
    
}
console.log(overlapping);


// console.log(arr);













// for (let i=0; i<arr.length; i++){
//     for (let j=i+1; j<arr.length; j++){
//         if (arr[i][0]>arr[j][1] || arr[i][1]>arr[j][0]) {

//             let temp=arr[i][1]
//             arr[i][1]=arr[j][0]
//             arr[j][0]=temp
            
//         }
//     }
// }





