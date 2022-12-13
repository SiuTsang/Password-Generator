var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", ",", ".", "/", "<", ">", "?", ";", ":", "|"];
var passwordLength = 9;

console.log(lowChar);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var smooth = criteria();
  var passwordText = document.querySelector("#password");
  if(smooth) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Generate password based on the criteria
function generatePassword() {
  var passwordFromArr = "";
  for(var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * choiceArr.length);
    passwordFromArr = passwordFromArr + choiceArr[random];
  }
  return passwordFromArr;
  
}

// Criteria
// 1. 8 < length < 128
// 2. lowercase characters?
// 3. uppercase characters?
// 4. numeric
// 5. special characters?
function criteria() {
  choiceArr = [];
  passwordLength = parseInt(prompt("Decide length of password from 8 to 128 characters?"));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength >128) {
    alert("Not valid input! Please try again!");
    return false;
  }

  if (confirm("Does the Password include lowercase characters?")) {
    choiceArr = choiceArr.concat(lowChar);
  }

  if (confirm("Does the Password include uppercase characters?")) {
    choiceArr = choiceArr.concat(upChar);
  }

  if (confirm("Does the Password include numeric characters?")) {
    choiceArr = choiceArr.concat(numeric);
  }

  if (confirm("Does the Password include special characters?")) {
    choiceArr = choiceArr.concat(specChar);
  }
  return true;
}
