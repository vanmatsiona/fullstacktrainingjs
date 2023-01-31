function validateForm(e){
 e.preventDefault()
  let FirstName = document.getElementById("FirstName")
   let firsterror= document.getElementById("firsterror")
    if(FirstName.value=="")
    {
    firsterror.innerHTML="please enter your Name"
    firsterror.style.color="red";
    FirstName.style.borderColor="red"
    }
    else{
     alert("working")
    }
 }