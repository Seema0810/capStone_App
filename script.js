
// This function validates the form
function formValidate(){
    // taking the form which has name "myForm " and the field which has the name "email" and "pass" 
    const email= document.forms["myForm"]["email"].value;
    const password=document.forms["myForm"]["pass"].value;
    console.log(email, password);
      
    if(email==="admin@admin.com" && password==="12345678"){
       alert("Login successful");
      
    }
    else{
        alert("Incorrect Email or password");
        }
    
}
