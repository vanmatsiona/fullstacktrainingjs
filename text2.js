function validationForm(){
    let inputname=document.getElementById('prenom');
    let inputname2=document.getElementById('Nom');
    let mail=document.querySelector('#email');
    let inputPassword=document.getElementById('password');
    let error_1=document.querySelector('.error');
    let error_2=document.querySelector('.error2');
    let error_3=document.querySelector('.error3');
    let error_4=document.querySelector('.error4');
    if(inputname.value==""){
        inputname.focus();
        inputname.style.border="2px solid red";
        error_1.innerHTML="*Veuillez entrer votre Prenom*";
        return false;
    }

    else{
        inputname.value=="";
        inputname.style.border="2px solid green";
    }

    if(inputname2.value==""){
        inputname2.focus();
        inputname2.style.border="2px solid red";
        error_2.innerHTML="Veuillez entrer votre Nom";
        return false;
    }

    else{
        inputname2.value=="";
        inputname2.style.border="2px solid green";
    }

    if(inputPassword.value==""){
        inputPassword.focus();
        inputPassword.style.border="2px solid red";
        error_3.innerHTML="Veuillez fournir votre mot de passe";
        return false;
    }
    else{
        inputPassword.value=="";
        inputPassword.style.border="2px solid green";
    }
}

const form=document.getElementById('forms');

form.addEventListener('submit',function validate(event){
    event.preventDefault();
    validationForm();
})
