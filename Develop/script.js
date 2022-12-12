// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var upperCase = document.querySelector('#uppercase');
var numbers = document.querySelector('#numbers');
var special = document.querySelector('#special');
var userNumber = document.querySelector('#userNumber');
var upperCaseCodes = downToUp(65, 90);
var lowerCaseCodes = downToUp(97, 122);
var numbersCodes = downToUp(48, 57);
var specialCodes = downToUp(33, 47).concat(downToUp(58, 64)).concat(downToUp(91, 96)).concat(downToUp(123, 126));


generateBtn.addEventListener('click', e => {
  e.preventDefault()
  var userAmount = userNumber.value;
  var wantsUpperCase = upperCase.checked;
  var wantsNumbers = numbers.checked;
  var wantsSpecials  = special.checked;
  var password = generatepassword(userAmount, wantsUpperCase, wantsNumbers, wantsSpecials);
  passwordText.textContent = password
})
// Write password to the #password input
function generatepassword(userAmount, wantsUpperCase, wantsNumbers, wantsSpecials) {
  var chars = lowerCaseCodes
  if(wantsUpperCase)    chars = chars.concat(upperCaseCodes);
  if(wantsNumbers) chars = chars.concat(numbersCodes);
  if(wantsSpecials) chars = chars.concat(specialCodes);
  var anotherArray = [];
  for(var i = 0; i < userAmount; i++) {
    var another = chars[Math.floor(Math.random() * chars.length)]
    anotherArray.push(String.fromCharCode(another));
  }
  return anotherArray.join('') 
  }  

userNumber.addEventListener('input', userAmount);
function userAmount(u) {
  var value = u.target.value;
  userNumber.value = value
}
  function downToUp(low, high) {
    var array = [];
    for(var i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }
  
 generateBtn.addEventListener("click", generatepassword);
  

 // var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 // var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 // var numbers = ['1','2','3','4','5','6','7','8','9','0'];
 // var specialChars = ['!','@','#','$','%','<','^','&','*','(',')','~','<','>','`','?','/','\\','=','+'];
 // var quotes = "";
   
// Add event listener to generate button
// User clicks on generate password and prompts should display
// User is prompted with criterias they want for password
// User will want a password length of at least 8 characters, but no more than 129 chars.
// User is able to click what criterias they want (uppercase, lowercase, special chars,
// numeric)
// User will want at least 1 character type
// Then user will be presented with password matching their criterias on page
// I have to create a function for each possible criteria combination
// Also, a function in which the password is always between 8 and 128 character