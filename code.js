
// variables that link your classes in html and JS
var passwordE1 = document.querySelector("#password");
var generateBtn = document.querySelector("#generate")


// clicks the button for generating a password
generateBtn.addEventListener("click", generatePassword);

// function that generates your password
function generatePassword() {

    // vars that confirm which character you'd like to use along with prmopt for how many characters you'd like to have
    var passwordLengthInput = prompt("How many characters would you like in your password?");
    var lowercaseCharsInput = confirm("Would you like lowercase letters in your password?");
    var uppercaseCharsInput = confirm("Would you like uppercase letters in your password?");
    var numericCharsInput = confirm("Would you like numbers in your password?");
    var specialCharsInput = confirm("Would you like special characters to in your password?");

    // vars that hold all content for slecting characters
    var lowercaseChars = ["abcdefghijklmnopqrstuvwxyz"];
    var uppercaseChars = ["ABCDEFGHIJKLMNOPQRSTUZWXYZ"];
    var numericChars = ["0123456789"];
    var specialChars = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
    var newPassword = 0;
    var passwordCharset = 0;


// prompted with how many characters the user would like to use 
    if (passwordLengthInput < 8 || passwordLengthInput > 128) {
        alert("Your password must be 8-128 characters long.");
        console.log(passwordLengthInput);
        
    } 

// confirms wether the user would like lowercase characters
    if (lowercaseCharsInput) {
        passwordCharset += lowercaseChars;
        console.log(lowercaseCharsInput);
    }

    // if false then the user is alerted
    else {
        alert("You don't care for any lowercase characters!");
    }

// confirms wether the user would like uppercase characters
    if (uppercaseCharsInput) {
        passwordCharset += uppercaseChars;
        console.log(uppercaseCharsInput);
    }

    // if false then the user is alerted
    else {
        alert("You don't care for any uppercase characters!")
    }

// confirms wether the user would like numerical characters
    if (numericCharsInput) {
        passwordCharset += numericChars;
        console.log(numericCharsInput);
    }

    // if flase then the user is alerted
    else {
        alert("You don't care for any numerical characters!");
    }

// confirms wether the user would like special cahracters
    if (specialCharsInput) {
        passwordCharset += specialChars;
        console.log(specialCharsInput);
    }

    // if false the user is alerted
    else {
        alert("You dont care for any special characters!");
    
    }
    // this loops the password options which generates a new password 
    if (passwordLengthInput >= 8 && passwordLengthInput <= 128) {
        for (var i = 0; i < passwordLengthInput; i++) {
            newPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
        };
        // this stores the password so that it doesn't disappear
        localStorage.setItem("password", newPassword);
        var newPasswordStr = localStorage.getItem("password");
        passwordE1.textContent = newPasswordStr;
        console.log(newPasswordStr);

        

    };
};

// function validateForm(lowercaseCharsInput) {
//     var x = document.value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
