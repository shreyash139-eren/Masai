const userProfile = {

    name: "Alice",
    
    age: 28,
    
    details: function() {
    
     return `${this.name} is ${this.age} years old.`
    },
    
    updateAge(newAge) {
    
     if (newAge <= 0 || isNaN(newAge)) {
    
       console.log("Invalid age.");
       return;
    
     }
    
     this.age = newAge;
    
    } 
};
    
    userProfile.updateAge(30);
    
    console.log(userProfile.details()); 