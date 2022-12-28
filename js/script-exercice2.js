//1-Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua";

//2-Check and display how many letters are in newDog.
console.log(newDog + " has " + newDog.length + " letter(s)");

//3-Display the newDog variable in uppercase and then in lowercase 
//(no need to create new variables, just console.log twice).
console.log("Uppercase: " + newDog.toUpperCase());
console.log("Lowercase: " + newDog.toLowerCase());

//4-Check if the variable newDog is equal to “Chihuahua”
//if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//else, console.log ‘I dont care, I prefer cats’
if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}

