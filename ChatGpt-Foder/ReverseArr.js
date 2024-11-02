
//Reverse Array..

function Revsersearr(arr) {
    let st = 0
    let end = arr.length-1
    let newarr= []

    for(let i=end; i>=st; i--){
        newarr[newarr.length] = arr[i]
        
    }
    return newarr;
}

let rv = Revsersearr([10,20,30,40,50,60])
console.log(rv);
