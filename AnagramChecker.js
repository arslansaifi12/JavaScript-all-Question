// Anagram Checker: Write a function to check if two given strings are anagrams (contain the same characters in a different order).

let  str1 = "listen"
let str2="silent"

let arr=str1.split("")
for(let i=0; i<arr.length; i++){

    for (let j=i+1; j<arr.length; j++){
        if (arr[i]>arr[j]) {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp

        } 
    }

}

console.log(arr);

//

let arr2=str2.split("")
for(let i=0; i<arr2.length; i++){

    for (let j=i+1; j<arr2.length; j++){
        if (arr2[i]>arr2[j]) {
            let temp=arr2[i]
            arr2[i]=arr2[j]
            arr2[j]=temp

        } 
    }

}

// console.log(arr2);

if (arr==arr2) {
    console.log("it's string anagram");
}else{
    console.log("it's not anagram");
    
}