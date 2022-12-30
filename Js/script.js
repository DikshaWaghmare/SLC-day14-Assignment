// <!-- task
// create a form and validate it: email, contact, name, age, designation, select multiple files, DOB and submit form -->

function validate() {
  var name = document.getElementById("user_name").value;
  var email = document.getElementById("user_email").value;
  var DOB = document.getElementById("user_dob").value;
  var age = document.getElementById("user_age").value;
  var contact = document.getElementById("user_contact").value;
  var designation = document.getElementById("user_d").value;
  var idcard = document.getElementById("user_idcard").value;
  var passphoto = document.getElementById("user_passphoto").value;

  var formValid = false;

  var nameBool = validateName(name, formValid);
  var emailBool = validateEmail(email, formValid);
  var dobBool = validateDob(DOB, formValid);
  var ageBool = validateAge(age, formValid);
  var contactBool = validateContact(contact, formValid);
  var desiBool = validateDesignation(designation, formValid);
  var idBool = validateIdcard(idcard, formValid);
  var passBool = validatePassphoto(passphoto, formValid);

  if (
    nameBool &&
    emailBool &&
    dobBool &&
    ageBool &&
    contactBool &&
    desiBool &&
    idBool &&
    passBool
  ) {
    alert("Form is submitted");
    document.getElementById("user_name").value = "";
    document.getElementById("user_email").value = "";
    document.getElementById("user_dob").value = "";
    document.getElementById("user_age").value = "";
    document.getElementById("user_contact").value = "";
    document.getElementById("user_d").value = "";
    document.getElementById("user_idcard").value = "";
    document.getElementById("user_passphoto").value = "";
  } else {
    alert("Please check all the fields");
  }
}

function validateName(name, formValid) {
  if (name.trim() == "") {
    formValid = false;
    document.getElementById("n-err").innerHTML = "This field is required";
  } else if (name.trim().length < 3) {
    formValid = false;
    document.getElementById("n-err").innerHTML = "This field is invalid";
  } else {
    formValid = true;
    document.getElementById("n-err").innerHTML = "";
  }
  return formValid;
}

function validateEmail(email, formValid) {
  var pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim() == "") {
    formValid = false;
    document.getElementById("e-err").innerHTML = "This field is required.";
  } else if (!pattern.test(email)) {
    formValid = false;
    document.getElementById("e-err").innerHTML = "This field is invalid.";
  } else {
    formValid = true;
    document.getElementById("e-err").innerHTML = "";
  }
  return formValid;
}

function validateDob(DOB, formValid) {
  console.log(DOB);
  var d = new Date();
  console.log(d.getFullYear());
  console.log(d.getMonth());
  console.log(d.getDate());
  if (DOB.trim() == "") {
    formValid = false;
    document.getElementById("dob-err").innerHTML = "This field is required.";
  } else if (d.getFullYear() > 2022) {
    document.getElementById("dob-err").innerHTML = "This field is invalid.";
  } else {
    formValid = true;
    document.getElementById("dob-err").innerHTML = "";
  }
  return formValid;
}

function validateAge(age, formValid) {
  if (age.trim() == "") {
    formValid = false;
    document.getElementById("age-err").innerHTML = "This field is required";
  } else if (age < 18 || age > 30) {
    document.getElementById("age-err").innerHTML = "You are not eligible!";
  } else {
    formValid = true;
    document.getElementById("age-err").innerHTML = "";
  }
  return formValid;
}

function validateContact(contact, formValid) {
  var pattern = /[0-9]/;
  if (contact.trim() === "") {
    formValid = false;
    document.getElementById("c-err").innerHTML = "This field is required";
  } else if (contact.trim().length != 10) {
    formValid = false;
    document.getElementById("c-err").innerHTML = "This field is invalid";
  } else if (!pattern.test(contact)) {
    formValid = false;
    document.getElementById("c-err").innerHTML = "This field is invalid";
  } else {
    formValid = true;
    document.getElementById("c-err").innerHTML = "";
  }

  return formValid;
}

function validateDesignation(designation, formValid) {
  if (designation.trim() == "") {
    formValid = false;
    document.getElementById("d-err").innerHTML = "This field is required";
  } else {
    formValid = true;
    document.getElementById("d-err").innerHTML = "";
  }
  return formValid;
}

function validateIdcard(idcard, formValid) {
  if (idcard.trim() == "") {
    formValid = false;
    document.getElementById("id-err").innerHTML = "This field is required";
  } else {
    formValid = true;
    document.getElementById("id-err").innerHTML = "";
  }
  return formValid;
}

function validatePassphoto(passphoto, formValid) {
  if (passphoto.trim() == "") {
    formValid = false;
    document.getElementById("p-err").innerHTML = "This field is required";
  } else {
    formValid = true;
    document.getElementById("p-err").innerHTML = "";
  }
  return formValid;
}
