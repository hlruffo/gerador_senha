let passwordLength = 16

const inputE = document.querySelector("#password")
const upperCaseCheckE = document.querySelector("#uppercase-check")
const symbolCheckE = document.querySelector("#symbol-check")
const numberCheckE = document.querySelector("#number-check")

function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvxz"
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVXZ"
    const numberChars = "123456789"
    const symbolChars = "?!@&*()[]"

    if(upperCaseCheckE.checked){
        chars  += upperChars}
    if(numberCheckE.checked){
        chars  += numberChars}
    if(symbolCheckE.checked){
        chars  += symbolChars}
    
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    inputE.value = password
    console.log(inputE.value)
}
const passwordLengthE = document.querySelector("#password-length")
passwordLengthE.addEventListener("input", () => {
    passwordLength = passwordLengthE.value
    document.querySelector("#password-lenght-text").innerText =passwordLength
    generatePassword()
})

function copy() {
    navigator.clipboard.writeText(inputE.value)
}
upperCaseCheckE.addEventListener("click", generatePassword)
numberCheckE.addEventListener("click", generatePassword)
symbolCheckE.addEventListener("click", generatePassword)

document.querySelector("#copy").addEventListener("click", copy)
document.querySelector(".copyButton").addEventListener("click", copy)


generatePassword()