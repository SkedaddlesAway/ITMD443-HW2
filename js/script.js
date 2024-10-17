function validateForm(){
    let fname = document.forms["signupForm"]["firstName"].value;
    let lname = document.forms["signupForm"]["lastName"].value;
    let email = document.forms["signupForm"]["email"].value;
    if (fname == "" || lname == "" || email == "") {
      alert("All fields must be filled out!");
      return false;
    } 
    alert("Welcome "+fname);
      return true;
  } 