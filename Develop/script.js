// Assignment code here
function generatePassword()
{
  

// gets length
    var length = window.prompt("Choose a length 8 - 128:","");

//gets lowercase/uppercase/numbers/characters in Y or N

    var lower = window.prompt("Include lowercase?", "Y or N");
    lower = lower.toUpperCase();

    var upper = window.prompt("Include uppercase?", "Y or N");
    upper = upper.toUpperCase();

    var numbers = window.prompt("Include numbers?", "Y or N");
    numbers = numbers.toUpperCase();

    var symbols = window.prompt("Include special characters?", "Y or N");
    symbols = symbols.toUpperCase();

    var comps = [length, lower, upper, numbers, symbols];

//fail criterias
    if(comps[0]>128 ||comps[0]< 8)
    {
          return "Length should be greater than 8 or less than 128 try again";
    }


    if(lower !== "Y" & lower !=="N")
    {

      return lower +" is not an accepted value, please try again.";
    }
    if(upper !== "Y" & upper !=="N")
    {
      return upper +" is not an accepted value, please try again.";
    }
    if(numbers !== "Y" & numbers !=="N")
    {
      return numbers +" is not an accepted value, please try again.";
    }
    if(symbols !== "Y" & symbols !=="N")
    {
      return symbols +" is not an accepted value, please try again.";
    }




    //to be used for the random number pulling
    var criteria = "";


    //tools for randomizing

    var lows = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var nums = "1234567890";
    var symb = "!@#$%^&*()`~;:,<.>/?";

    if(comps[1] ==="Y")
    {
      criteria = criteria+ lows;
    }
    if(comps[2] ==="Y")
    {
      criteria = criteria+ caps;
    }
    if(comps[3] ==="Y")
    {
      criteria = criteria+ nums;
    }
    if(comps[4] ==="Y")
    {
      criteria = criteria+ symb;
    }


    if(criteria ==="")
    {
      return "Please select some conditions";
    }

    var newPass = "";

    for(var i=0; i < comps[0]; i++)
    {
      var atta = Math.floor(Math.random() * (criteria.length + 1));
      newPass = newPass + criteria.charAt(atta);
    }
    return newPass;












}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
