// Problem Statement: Create a program that takes three numbers as input and determines the largest number using nested ternary operators. You must solve this problem using only ternary logic without using the Math.max() function.

// Example: let num1 = 45, num2 = 78, num3 = 33;

// Output: 78 (The largest number)

let largest={
    num1:20,
    num2:45,
    num3:32,

    larNum: function(num1,num2,num3){
        let output=num1>num2 && num1>num3 ? num1:
                   num2>num1 && num2>num3 ? num2:
                   num3>num1 && num3>num2 ? num3:
                   this.num1>this.num2 && this.num1>this.num3 ? this.num1:
                   this.num2>this.num1 && this.num2>this.num3 ? this.num2:
                   this.num3
                   
        return output
    }
    
}
console.log(largest.larNum(456,654,543))