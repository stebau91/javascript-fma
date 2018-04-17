function focusInput() {
  document.getElementById("fname").focus();
}

function binding() {
  document.getElementById("btn_submit").onclick = validate;
}

/*this function help to create and hint onblur that help the costumer to input the data
 and with the function setHintFields you can set how many field in the form you want 
 with the hint and with which hint you prefer*/
function hint(txtElem, defaultText) {
  txtElem.value = defaultText;
  txtElem.style.color = "#A8A8A8";
  txtElem.style.fontStyle = "italic";
  txtElem.onfocus = function() {
    if (this.value === defaultText) {
      this.value = "";
      this.style.color = "#000";
      this.style.fontStyle = "normal";
    }
  }
  txtElem.onblur = function() {
    if (this.value === "") {
      this.value = defaultText;
      this.style.color = "#A8A8A8";
      this.style.fontStyle = "italic";
    }
  }
}

function setHintFields() {
    hint(document.getElementById("fname"), "");
    hint(document.getElementById("lname"), "Enter your last name");
    hint(document.getElementById("han"), "");
    hint(document.getElementById("email"), "");
    hint(document.getElementById("telnum"), "");
}

/*now i set a function for every single field with the rules i need, and if the rule is not followed
and error message will show to help the costumer to correct the form */
function firstName() {
  var boolean = true;
  var regEx = /^[a-z]+$/i; 
  var fname = document.getElementById("fname").value
  if (fname === "") {
    document.getElementById("fnameValidationError").innerHTML = "* Please Enter a First Name";
	document.getElementById("fnameValidationError").style.display = "inline";
    boolean = false;
  }else if (!regEx.test(fname)) {
    document.getElementById("fnameValidationError").innerHTML = "First name can't contain numbers or other non-allowed alphabetic characters.";
	document.getElementById("fnameValidationError").style.display = "inline";
    boolean = false;
  }else if (fname.length < 2) {
    document.getElementById("fnameValidationError").innerHTML = "First name must contain more than one character.";
	document.getElementById("fnameValidationError").style.display = "inline";
    boolean = false;
  }else {
    document.getElementById("fnameValidationError").innerHTML = "";
    document.getElementById("fnameValidationError").style.display = "none";
  }
  return boolean;
}

function lastName() {
  var boolean = true;
  var regEx = /^([a-z]+\-)*[a-z]+$/i; 
  var lname = document.getElementById("lname").value
  if (lname === "" || lname === "Enter your last name") {
    document.getElementById("lnameValidationError").innerHTML = "* Enter your last name";
	document.getElementById("lnameValidationError").style.display = "inline";
    boolean = false;
  }else if (!regEx.test(lname)) {
    document.getElementById("lnameValidationError").innerHTML = "Last name can't contain numbers or other non-allowed alphabetic characters.";
	document.getElementById("lnameValidationError").style.display = "inline";
    boolean = false;
  }else if (lname.length < 2) {
    document.getElementById("lnameValidationError").innerHTML = "Last name must contain more than one character.";
	document.getElementById("lnameValidationError").style.display = "inline";
    boolean = false;
  }else {
    document.getElementById("lnameValidationError").innerHTML = "";
    document.getElementById("lnameValidationError").style.display = "none";
  }
  return boolean;
}

function healthNum() {
  var boolean = true;
  var regEx = /^ZHA[0-9]{6}$/; 
  var zhaNum = document.getElementById("han").value;
  if (zhaNum === "") {
    document.getElementById("hanValidationError").innerHTML = "e.g. ZHA346783";
	document.getElementById("hanValidationError").style.display = "inline";
    boolean = false;
  }else if (!regEx.test(zhaNum)) {
    document.getElementById("hanValidationError").innerHTML = "Invalid number it should be in the form of (e.g ZHA346783)";
	document.getElementById("hanValidationError").style.display = "inline";
    boolean = false;
  }else {
    document.getElementById("hanValidationError").innerHTML = "";
    document.getElementById("hanValidationError").style.display = "none";
  }
  return boolean;
}

function emailAddr() {
  var boolean = true;
  var regEx = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/; 
  var email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("emailValidationError").innerHTML = "Enter your email";
	document.getElementById("emailValidationError").style.display = "inline";
    boolean = false;
  }else if (!regEx.test(email)) {
    document.getElementById("emailValidationError").innerHTML = "Invalid Email";
	document.getElementById("emailValidationError").style.display = "inline";
    boolean = false;
  }else {
    document.getElementById("emailValidationError").innerHTML = "";
    document.getElementById("emailValidationError").style.display = "none";
  }
  return boolean;
}

function telephoneNum() {
  var boolean = true;
  var regEx = /^[0-9]+$/; 
  var telNum = document.getElementById("telnum").value;
  if (!regEx.test(telNum) && telNum !== "") {
    document.getElementById("telnumValidationError").innerHTML = "Enter your phone number";
	document.getElementById("telnumValidationError").style.display = "inline";
    boolean = false;
  }else {
    document.getElementById("telnumValidationError").innerHTML = "";
    document.getElementById("telnumValidationError").style.display = "none";
  }
  return boolean;
}

function toolTip() {
  document.getElementById('info_id').onmouseover = function() {
    var toolTip = document.getElementById('tooltip_id');
    document.getElementById('text_tip').innerHTML = "If you do not know your ZHA number, please contact your GP";
    toolTip.style.display='block';
  }
  document.getElementById('info_id').onmouseout = function() {
    var toolTip = document.getElementById('tooltip_id');
    toolTip.style.display = 'none';
  }
}

/* and with this function i will validate and check evry single field input and if ALL of them
are true the form will submit if not the appropriate error message will show*/
function validate() {
  var submitForm = true;
  var fname = firstName();
  var lname = lastName();
  var han = healthNum();
  var email = emailAddr();
  var telNum = telephoneNum();
  if (fname == false || lname == false ||
        han == false || email == false || telNum == false) {
    submitForm = false;
  }
  return submitForm;
}


function init() {
  focusInput();
  binding();
  toolTip();
  setHintFields();
}

window.onload = init;