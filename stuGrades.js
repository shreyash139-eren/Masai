// Write a program that classifies students based on their scores stored in an object. The object contains student names as keys and their scores as values. You need to print each student’s name along with their grade based on the following conditions:

// Score >= 90 → "A"
// Score >= 80 and < 90 → "B"
// Score >= 70 and < 80 → "C"
// Score >= 60 and < 70 → "D"
// Score < 60 → "F"
// You must use a for-in loop to iterate through the object.

let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  
  for(let scores in studentScores){
    let grade =studentScores[scores]
    let output=grade>=90 ? `${scores} - A`:
               grade>=80 && grade<90 ? `${scores} - B`:
               grade>=70 && grade<80 ? `${scores} - C`:
               grade>=60 && grade<70 ? `${scores} - D`:
               `${scores} - F`

               console.log(output)
  }