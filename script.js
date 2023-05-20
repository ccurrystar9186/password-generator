// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // ?????? NOT HERE!!!!
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  let password_length = prompt("Enter the length of the password (8-128):","8");
  // The input here will be of type string
  password_length = parseInt(password_length); // converts to an integer
  if (Number.isNaN(password_length)){
    alert ("password length should be provided as a number ")
    return null
  }
  if (password_length < 8 || password_length > 128) {
  alert (" password needs to be 8-128")
  return null 
  } 
  // To "define" or "declare" a variable, we use let, const (or var).
  // If the value might change, use let.
  // If it will be fixed, use const.
  // We use let, const or var when FIRST "initializing" a variable name
  
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include 
  // lowercase, uppercase, numeric, and/or special characters
  let lowercase = confirm("Would you like to include lowercase letters?");
  let uppercase = confirm("would you like to include uppercase?");
  let numeric = confirm("Would you like to include numeric and/or special characters?");
  let special = confirm("Would you like to include special characters?");
if (lowercase === false && uppercase === false && numeric === false && special === false) {
  alert 
}
  console.log(password_length)
  console.log(uppercase)
  console.log(lowercase)
  console.log(numeric)
  console.log(special)

  var password = ""

  if(Uppercase){
    selectedTypes += keys.upper;
  }

  if(wantsLower){
    selectedTypes += keys.lower;
  }
  if(wantsNumbers){
    selectedTypes += keys.numbers;
  }
  if(wantsSpecial){
    selectedTypes += keys.special;
  }

  if(!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert("Please select at least one character type")
  }

for(i =0; i < passLength; i++) {
  password += selectedTypes.charAt(Math.floor(Math.random() * selectedTypes.length))
}

return password

}


// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when the button is clicked, this line causes the function writePassword to run

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page.
  


  
   
    