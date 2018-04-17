
$(document).ready(function(){

  /* Focus on first name */
  $('#fname').focus();

  /* Set rules and messages for jqueryvalidation plugin */
  $('#form_id').validate({
    rules: {
      fname: {
        lettersonly: true,
        minlength: 2,
        required: true
      },
      lname: {
        lettersonly: true,
        lname: true,
        minlength: 2,
        required: true
      },
      han: {
        han: true,
        required: true
      },
      email: {
        email: true,
        required: true
      },
      telnum: {
        digits: true,
        required: false
	  }
    },
    messages: {
			 fname: {
				minlength: "* Please Enter more than one character"
			},
			lname: {
				minlength: "* Please Enter more than one character"
			},
            title: {
                required: "*Title is required,please select a title."
            },
            email: {
                required: "email is required, please enter email."
			}
    }
  });
  
 /*  Set up the validator rules for the inputs */
  $.validator.addMethod("validfname", function(fname, element) {
    return /^[A-Za-z]{2,}$/.test(fname);
    }, "* First name can't contain numbers or other non-allowed alphabetic characters.And must contain more than one character."
);

  $.validator.addMethod("validlname", function(lname, element) {
    return /^[A-Za-z\-]{2,}$/.test(lname);
    }, "* Last name can't contain numbers or other non-allowed alphabetic characters.Only hyphen(e.g Whittaker-Jones).And must contain more than one character."
);


  $.validator.addMethod("han", function(value, element){
    return /^ZHA[0-9]{6}$/.test(value);
  }, "* Please Enter a valid syntax");


  $.validator.addMethod("validtelnum", function(telnum, element) {
        return this.optional(element) || /0\d{10}$| /.test(telnum);
    }, "* You must enter a valid UK telephone number."
);

/* Add placeholder on blur when empty or after deleting char/s */
  $.validator.addMethod("lname", function(value, element) {
    $("lname").focusin(function() {
        return $(element).attr("placeholder", "");
    });
    $("lname").focusout(function() {
        return $(element).attr("placeholder", "Enter Last Name");
    }).focusout();
  })

  /* Show tooltip box */
  $('#info_id').mouseover(function() {
    $('#text_tip').html('If you do not know your ZHA number, please contact your GP');
    $('#tooltip_id').css('display', 'block');
  });
  $('#info_id').mouseout(function() {
    $('#tooltip_id').css('display', 'none');
  });

}); */