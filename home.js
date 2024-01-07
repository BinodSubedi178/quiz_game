let formToggle = document.getElementsByClassName('register-toggle-buttons');
let submitButton = document.getElementsByClassName('submit-button')[0]
formToggle[0].addEventListener('click',() => {
    formToggle[0].style.backgroundColor = "var(--color-secondary";
    formToggle[1].style.backgroundColor = "transparent"
    submitButton.innerHTML = "&nbsp;&nbsp;<strong>Login</strong>&nbsp;&nbsp;";
    
})
formToggle[1].addEventListener('click',() => {
    formToggle[1].style.backgroundColor = "var(--color-secondary";
    formToggle[0].style.backgroundColor = "transparent"
    submitButton.innerHTML = `<strong>Register</strong>`

})