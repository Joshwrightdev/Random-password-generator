//Event Listener
document.querySelector("#generate").addEventListener("click", writePassword);

//Variables
var confirmPasswordLength = "";
var confirmNumChars;
var confirmSpecialChars;
var confirmUpperChars;
var confirmLowerChars;

var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?"];
var upperChars = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
var lowerChars = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

//function to generate a password with character prompts and confirmations
function generatePassword() {
  var confirmPasswordLength = prompt(
    "Choose a Password length between 8-128 Characters:"
  );
  while (confirmPasswordLength <= 7 || confirmPasswordLength >= 128) {
    alert("Password has to be 8-128 Characters long");
    var confirmPasswordLength = prompt(
      "Choose a Password length between 8-128 Characters:"
    );
  }
  alert("Your password will have " + confirmPasswordLength + " numbers");

  var confirmNumChars = confirm("Would you like Numbers in your password?");
  alert("IT IS " + confirmNumChars + " THAT YOU WILL HAVE NUMBERS INCLUDED");
  var confirmSpecialChars = confirm(
    "Would you like Special Characters in your password?"
  );
  alert(
    "IT IS  " + confirmSpecialChars + " THAT YOU WILL HAVE SPECIAL CHARACTERS"
  );
  var confirmUpperChars = confirm(
    "Would you like Upper Case Letters in your password?"
  );
  alert(
    "IT IS " +
      confirmUpperChars +
      " THAT YOU WILL HAVE UPPERCASE CHARACTERS INCLUDED"
  );
  var confirmLowerChars = confirm(
    "Would you like Lower Case Letters in your password?"
  );
  alert(
    "IT IS " +
      confirmLowerChars +
      " THAT YOU WILL HAVE LOWERCASE CHARACTERS INCLUDED"
  );
  while (
    confirmNumChars === false &&
    confirmSpecialChars === false &&
    confirmUpperChars === false &&
    confirmLowerChars == false
  ) {
    alert(
      "Password must have at least one Choice. Please select at least one Character Choice from the prompts!"
    );
    var confirmNumChars = confirm("Would you like Numbers in your password?");
    alert("IT IS " + confirmNumChars + " THAT YOU WILL HAVE NUMBERS INCLUDED");
    var confirmSpecialChars = confirm(
      "Would you like Special Characters in your password?"
    );
    alert(
      "IT IS " + confirmSpecialChars + " THAT YOU WILL HAVE SPECIAL CHARACTERS"
    );
    var confirmUpperChars = confirm(
      "Would you like Upper Case Letters in your password?"
    );
    alert(
      "IT IS " +
        confirmUpperChars +
        " THAT YOU WILL HAVE UPPERCASE CHARACTERS INCLUDED"
    );
    var confirmLowerChars = confirm(
      "Would you like Lower Case Letters in your password?"
    );
    alert(
      "IT IS " +
        confirmLowerChars +
        " THAT YOU WILL HAVE LOWERCASE CHARACTERS INCLUDED"
    );
  }

  var passwordChars = [];
  if (confirmNumChars) {
    passwordChars = passwordChars.concat(numChars);
  }

  if (confirmSpecialChars) {
    passwordChars = passwordChars.concat(specialChars);
  }

  if (confirmUpperChars) {
    passwordChars = passwordChars.concat(upperChars);
  }

  if (confirmLowerChars) {
    passwordChars = passwordChars.concat(lowerChars);
  }

  var newPassword = "";

  for (var i = 0; i < confirmPasswordLength; i++) {
    newPassword =
      newPassword +
      passwordChars[Math.floor(Math.random() * passwordChars.length)];
    console.log(newPassword);
  }

  return newPassword;
}
function writePassword() {
  var passwordFinal = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordFinal;
}
