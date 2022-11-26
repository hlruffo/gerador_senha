let passwordLength = 16
        const inputE = document.querySelector("#password")

        function generatePassword() {
            const chars = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ123456789?!@&*()[]"
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
            generatePassword()
        })

        function copy() {
            navigator.clipboard.writeText(inputE.value)
        }
        const copyButtonE = document.querySelector("#copy")
        copyButtonE.addEventListener("click", copy)


        generatePassword()