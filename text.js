function validation(){
    let inputname=document.getElementById('FirstName');
    let inputname2=document.getElementById('LastName');
    let email=document.querySelector('#mail');
    let input=document.getElementById('website');
    let p=document.getElementById('error');
    let p2=document.getElementById('error2');
    let p3=document.getElementById('error3');
    if(inputname.value ==""){
        inputname.focus();
        inputname.style.border="3px solid red";
        p.innerHTML="please enter your first Name";
        return false;
    }
    else{
        inputname.value==""
        input.style.border="3px solid green";
    }
   if(inputname2.value==""){
    inputname2.focus();
    inputname2.style.border="3px solid red";
    p2.innerHTML="please enter your Last Name";
    return false;
   }
 else{
    inputname2.value=="";
    inputname2.style.border="3px solid green";
 }
 if(input.value==""){
    input.focus();
    input.style.border="3px solid red";
    p3.innerHTML="please enter your website";
    return false;
 }
else{
    input.value=="";
    input.style.border="3px solid green";
}
}

let form=document.getElementById('forms');
form.addEventListener('submit',function formValidation(event){
 event.preventDefault();
 validation()
})
let email=document.querySelector('#email');
console.log(email);