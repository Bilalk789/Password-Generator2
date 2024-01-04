// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  
  var passwordLength = prompt("Enter password length between the integers 8 and 128 characters.:");

  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(Number(passwordLength))) {
    alert("Enter a valid password lenght integer between 8 and 128 characters.");
    return ""; 
  } else {
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numeric numbers?");
    var includeSpecial = confirm("Include special symbols?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Select at least one character type to continue.");
    return ""; 
  }}

  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericNumbers = "0123456789";
  var specialSymbols = "!#$%&'()*+,-./:<=>?@[\\]^_`{|}~";

  var allChars = "";
  if (includeLowercase) allChars += lowercaseLetters;
  if (includeUppercase) allChars += uppercaseLetters;
  if (includeNumeric) allChars += numericNumbers;
  if (includeSpecial) allChars += specialSymbols;

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars.charAt(randomIndex);
  }
  return generatedPassword;
}