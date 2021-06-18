
$(document).ready( function(){
    var signinBtn = $('#signin-btn');
    var email = $('#input-email');
    var password = $('#input-password');

    var emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    var emailVerify = false;
    var passwordVerify = false;

    
    email.on("input", function(){
        var emailVal = email.val();

        emailVerify = emailVal.match(emailReg) != null;
        

        isVerify();
    });

    password.on("input", function(){
        var passwordVal = password.val();

        
        passwordVerify = passwordVal.length >= 8;
        
        isVerify();

    });

    function isVerify(){
        var isVerify = emailVerify & passwordVerify;

        signinBtn.attr('disabled', !isVerify);

        console.log("disabled = " + !isVerify);
    }
});
