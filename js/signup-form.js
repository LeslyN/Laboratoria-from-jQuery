// Generated by CoffeeScript 1.12.5
(function() {
  $(function() {
    var $confirm_password_input, $password_input, $submit, $username_input, are_all_vaidations_passing, are_passwords_maching, confirm_password_event, form_state_event, is_password_valid, is_username_valid, password_event, username_event;
    $('form p span').hide();
    $username_input = $('#username');
    $password_input = $('#password');
    $confirm_password_input = $('#confirm_password');
    $submit = $('#submit');
    is_username_valid = function() {
      return $username_input.val().length >= 3;
    };
    is_password_valid = function() {
      return $password_input.val().length >= 6;
    };
    are_passwords_maching = function() {
      return $password_input.val() === $confirm_password_input.val();
    };
    username_event = function() {
      if (is_username_valid()) {
        return $username_input.next().hide();
      } else {
        return $username_input.next().show();
      }
    };
    password_event = function() {
      if (is_password_valid()) {
        return $password_input.next().hide();
      } else {
        return $password_input.next().show();
      }
    };
    confirm_password_event = function() {
      if (are_passwords_maching()) {
        return $confirm_password_input.next().hide();
      } else {
        return $confirm_password_input.next().show();
      }
    };
    are_all_vaidations_passing = function() {
      return is_username_valid() && is_password_valid() && are_passwords_maching();
    };
    form_state_event = function() {
      return $submit.attr('disabled', !are_all_vaidations_passing());
    };
    $username_input.focus(username_event).keyup(username_event).keyup(password_event).keyup(form_state_event);
    $password_input.focus(password_event).keyup(password_event).keyup(confirm_password_event).keyup(form_state_event);
    $confirm_password_input.focus(confirm_password_event).keyup(confirm_password_event).keyup(form_state_event);
    return form_state_event();
  });

}).call(this);