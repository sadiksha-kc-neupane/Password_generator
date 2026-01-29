const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allChars = upperCase + lowerCase + numbers + symbols;

// console.log("Script loaded");

function shufflePassword(password) {
  let passwordArray = password.split("");
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }
  return passwordArray.join("");
}

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = shufflePassword(password);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  createPassword();
});

function copyPassword() {
  console.log("copyPassword called");
  if (!passwordBox.value) {
    createPassword();
  }
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((error) => {
      console.error("Copy failed:", error);
      alert("Failed to copy password");
    });
}

// Attach copy event listener to the copy image
const copyImg = document.querySelector("img[src='copy.svg']");
if (copyImg) {
  copyImg.addEventListener("click", copyPassword);
}
// } else {
//   console.error("Copy image not found");
// }
