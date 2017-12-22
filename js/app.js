$(document).ready(function() {
  var usernameText = $('#username');
  var passwordText = $('#password');
  var confirmText = $('#confirm_password');
  var buttonSubmit = $('#submit'); 

  $('from p span').hide();
  
  usernameText.focus();  
  passwordText.attr('disabled', true);
  confirmText.attr('disabled', true);
  buttonSubmit.attr('disabled', true);
  buttonSubmit.css({'backgroundColor': '#952b2c75'});

  usernameText.keyup(function() {
    usernameText.focus();
    passwordText.attr('disabled', true);
    confirmText.attr('disabled', true);
    buttonSubmit.attr('disabled', true);
    if(usernameText.val().length >= 3) {
      usernameText.next().hide();
      passwordText.attr('disabled', false);
      confirmText.attr('disabled', true);
      buttonSubmit.attr('disabled', true);    
    }
  })

  passwordText.keyup(function() {
    passwordText.focus();
    buttonSubmit.attr('disabled', true);
    buttonSubmit.attr('disabled', true);
    if(passwordText.val().length >= 6 && passwordText.val().length != ' ') {
      confirmText.attr('disabled', false);
      passwordText.next().hide();
    } else {
      passwordText.next().show();
      passwordText.addClass('error');
    }
  });

  confirmText.keyup(function() {
    confirmText.attr('disable', false);
    if(passwordText.val() === confirmText.val()) {
      confirmText.next().hide();
      buttonSubmit.attr('disabled', false);
      buttonSubmit.css({'backgroundColor': '#952b2c'});
      confirmText.css({'border': '1px solid green'});
    }
    else {
      // confirmText.addClass('error');
      confirmText.next().show();
      // alert('La contraseña no puede ser caracter vacío');
      buttonSubmit.attr('disabled', true);
      buttonSubmit.css({'backgroundColor': '#952b2c75'});
      confirmText.css({'border': '1px solid red'});
    }

    buttonSubmit.click(function() {
      buttonSubmit.submit();
      // if(usernameText.val().length == '' && passwordText.val().length == '' && confirmText.val().length == '') {
      //   buttonSubmit.append('<span>Hay casillas vacías!</span>').show();
      //   event.preventDefault();
      // }
    })
  });
});