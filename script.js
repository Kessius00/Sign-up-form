// Constants
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password_confirm')



passwordConfirm.addEventListener('focusout', ()=>{
    changeValidity(equalValidation(password.value, passwordConfirm.value))
});

function equalValidation(psswrd, cnfrmPsswrd){
    return psswrd == cnfrmPsswrd;
};

function changeValidity(samePassword){
    if (samePassword){
        password.style.borderColor = 'greenyellow';
        passwordConfirm.style.borderColor = 'greenyellow';
        return
    } 
    password.style.borderColor = 'red';
    passwordConfirm.style.borderColor = 'red';
    alert('Passwords do not match!')
    return 

}



