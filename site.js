$(document).ready(function() {
    $("#login").click(function() {
        var email = $("#exampleInputEmail1").val();
        var password = $("#exampleInputPassword1").val();
        
        // Checking for blank fields.
        if (email == '' || password == '') {
            $('input[type="email"],input[type="password"]').css("border", "2px solid red");
            $('input[type="email"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Please type your credentials...!!!");
        } else if(email == 'test@test.com' && password == '123'){
        	window.location.href = "homepage.html";
        	alert("Your credentials are OK!!");
        }else{
        	alert("Username or password is invalid.");
        }
    });
});