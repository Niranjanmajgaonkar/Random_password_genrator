// Animation effect on the title
let firstLetter = document.querySelector("#titel").innerText;
let initialChars = firstLetter.substr(0, 6);
let result = "";

async function addCharactersWithDelay() {
  for (let i = 0; i < initialChars.length; i++) {
    await new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 300);
    });

    result += `<span style="color: red;">${initialChars[i]}</span>`;
    document.querySelector("#titel").innerHTML = result + firstLetter.substr(6);
  }
}

// Password generator class
class PasswordGenerator {
  generatePassword(length) {
    if (length < 10) {
      let errorMessage = "Please enter a length greater than 10.";
      document.querySelector("#ansinner").innerText = errorMessage;
    } else if(length <50) {
      let characters = 'abcdefghijklmnopqrstuvwxyz';
      let numbers = '1234567890';
      let specialChars = '~!@#$%^&*()';
      let password = '';

      for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
      }

      document.querySelector("#ansinner").innerText = password.substr(0, length);
      document.querySelector("#btn").value=''
      
    }else{
      let errorMessage = "please Enter less than 50 length";
      document.querySelector("#ansinner").innerText = errorMessage;
    }
  }
}

// Button click event listener
let btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
  generatePassword();
});


addEventListener('keydown',(key)=>{
  if(key.code == 'Enter'){
    generatePassword();
  }
})

// Function to get password length from input and generate password
function generatePassword() {
  let passwordLength = parseInt(document.querySelector("#inputbox").value, 10);
  let passwordGenerator = new PasswordGenerator();
  passwordGenerator.generatePassword(passwordLength);
}

// Initial animation on title
addCharactersWithDelay();
