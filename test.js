// Write a function that takes a sentence as input and performs the following operations step by step:

// Convert the entire sentence to lowercase.

// Remove all numbers and spaces from the sentence.

// Reverse the modified sentence and capitalize all vowels (a, e, i, o, u).

// Create a frequency map of every character in the final transformed string.

// Your function should return:

// The final transformed string.

// A dictionary/object containing the frequency of each character in the transformed string.

function transform(str){
    str=str.toLowerCase()
    let nstr="abcdefghijklmnopqrstuvwxyz"
    let final=""
    let vowels="aeiou"
    let fullNfinal=""
for(let i=0;i<str.length;i++){
    for(let j=0;j<nstr.length;j++){
        if(str[i]===nstr[j]){
            final+=str[i]
        }
    }
}
for(let i=final.length-1;i>=0;i--){
  if(final[i]==="a" || final[i]==="e" || final[i]==="i" || final[i]==="o" || final[i]==="u"){
    fullNfinal+=final[i].toUpperCase()
  }
  else{
    fullNfinal+=final[i]
  }
}
console.log(fullNfinal)

let freq={}
for(let i=0;i<fullNfinal.length;i++){
    if(freq[fullNfinal[i]]){
        freq[fullNfinal[i]]++
    }
    else{
        freq[fullNfinal[i]]=1
    }
}
console.log(freq)
}
transform("aBCdeuf456 o0 ggfi")