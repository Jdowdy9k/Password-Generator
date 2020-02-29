var password = document.querySelector("#password");
var button = document.querySelector("#butt");
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
var numCharacters = ["0123456789"];
var lowerCharacters = ["abcdefghijklmnopqrstuvwxyz"];
var upperCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var randomCharString = "";



    button.addEventListener("click", function generate() {
            var passwordLength = prompt("Please choose a password length between 8 and 128 characters.").toLowerCase();
            var passwordString = "";
            if (passwordLength > 8 && passwordLength < 128) {
                var userSpecChar = prompt("would you like to use special characters?").toLowerCase();
                if ( userSpecChar === "yes") {
                    randomCharString = randomCharString + specialCharacters
                }
                if (userSpecChar === "no") {
                    randomCharString = randomCharString
                }
                var userNumChar = prompt("would you like to use number characters?").toLowerCase();
                if (userNumChar === "yes") {
                    randomCharString = randomCharString + numCharacters
                }
                if (userNumChar === "no") {
                    randomCharString = randomCharString 
                }
                var userlowerChar = prompt("would you like to use lower case letters?").toLowerCase();
                if (userlowerChar === "yes") {
                    randomCharString = randomCharString + lowerCharacters
                }
                if (userlowerChar === "no") {
                    randomCharString = randomCharString
                }
                var userupperchar = prompt("would you like to use upper case characters?").toLowerCase();
                if (userupperchar === "yes") {
                    randomCharString = randomCharString + upperCharacters
                }
                if (userupperchar === "no") {
                    randomCharString = randomCharString
                }
                console.log(randomCharString)
            }

    
            if (randomCharString !== "") {
                for (i = 1; i <= passwordLength; i++) {
                    passwordString = passwordString + randomCharString.charAt(Math.floor(Math.random() * Math.floor((randomCharString.length) - 1)));
                }
                password.append(passwordString)
            }
    });
