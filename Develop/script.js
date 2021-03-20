//Event Listener
document.querySelector("generate").addEventListener("click",writePassword)

//Variables
var confirmPasswordLength = "";
var confirmNumChars;
var confirmSpecialChars;
var confirmUpperChars;
var confirmLowerChars;

var numChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = ["!","@","#","$","%","^","&","*","<",">","?"];
var upperChars = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C",
"V","B","N","M"];
var lowerChars = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x"
,"c","v","b","n","m"];

function generatePassword () {
var confirmPasswordLength = (prompt( "Choose a Password length between 8-128 Characters:" ));
  while (confirmPasswordLength <=7 || confirmPasswordLength >=128 ){
    alert("Password has to be 8-128 Characters long") 
   var confirmPasswordLength = prompt( "Choose a Password length between 8-128 Characters:");
  }
}
