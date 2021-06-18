
$(document).ready( function(){
    var signupBtn = $('#signup-btn');
    var email = $('#input-email');
    var username = $('#input-username'); 
    var phone = $('#input-phone');
    var password = $('#input-password');
    var passwordCheck = $('#input-password-check');

    var emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    var phoneReg = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/
    var passwordReg = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/

    var emailValid = false;
    var phoneValid = false;
    var passwordValid = false;
    var passwordCheckValid = false;

    
    email.on("input", function(){
        var emailVal = email.val();

        emailValid = emailVal.match(emailReg) != null;
        
        isValid($("#error_email"), emailValid, emailVal);
    });

    phone.on("input", function(){
        var phoneVal = phone.val();

        phoneValid = phoneVal.match(phoneReg) != null;
        
        isValid($("#error_phone"), phoneValid, phoneVal);
    });

    password.on("input", function(){
        var passwordVal = password.val();

        passwordValid = passwordVal.match(passwordReg) != null;
        
        isValid($("#error_password"), passwordValid, passwordVal);
    });

    passwordCheck.on("input", function(){
        var passwordCheckVal = passwordCheck.val();

        passwordCheckValid = passwordCheckVal === password.val();
        
        isValid($("#error_password_check"), passwordCheckValid, passwordCheckVal);
    });

    function isValid(error_msg_tag, is_valid, value){
        if(is_valid){
            error_msg_tag.hide();
        }
        else{
            if(value === ''){
                error_msg_tag.hide();
            }
            else{
                error_msg_tag.show();
            }
        }

        notifyDataChanged();
    }

    function notifyDataChanged(){
        var isValid = emailValid & phoneValid & username.val() != '' & passwordValid & passwordCheckValid;

        signupBtn.attr('disabled', !isValid);
    }

});
