let num = 97101
num = num.toString()
let reversedNum=""

  for(let i=num.length-1;i>=0;i--){
    reversedNum+=num[i]
  }
  reversedNum=parseInt(reversedNum)
  
  console.log(reversedNum)
