$(function () {

    if ($("#loginForm").length) {
        var request = new XMLHttpRequest();
        request.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);

                $("#loginForm").submit(function (event) {
                    event.preventDefault();
                    let username = $("#inputEmail").val();
                    let password = $("#inputPassword").val();

                    if (username === object.email && password === object.password) {
                        window.location.href = "index.html";
                    } else {
                        $("body").prepend(`<div id="alert-box" class="position-absolute w-100 text-center"><div class="alert alert-danger" role="alert">Incorrect user or password</div></div>`);
                        $("#alert-box").fadeIn("fast").delay(2000).fadeOut("slow");
                    }
                });

            }

            $("form input").blur(function () {
                validateFormElements($(this));
            });
        
            function validateFormElements(input) {
                if ($(input).attr("type") === "email" && $(input).prop("required")) {
                    validateEmail(input);
                }
                if ($(input).attr("type") === "password" && $(input).prop("required")) {
        
                    min = 1;
                    validateInputValue(input);
        
                    
                }
            }
        
        
            function isInvalid(element, validClass = "is-valid", invalidClass = "is-invalid") {
                $(element).addClass(invalidClass);
                $(element).removeClass(validClass);
            }
        
            function isValid(element, validClass = "is-valid", invalidClass = "is-invalid") {
                $(element).addClass(validClass);
                $(element).removeClass(invalidClass);
            }
            
        
            function validateEmail(input) {
                let invalidFeedbackId = "#" + $(input).attr("id") + "-invalid-feedback";
                let invalidFeedbackDefault = $(invalidFeedbackId).html();
                let invalidFeedback = "The E-Mail you entered is not valid";
                let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        
                if (!$(input).val()) {
                    isInvalid(input);
                    $(invalidFeedbackId).html(invalidFeedbackDefault);
                } else if (!regex.test($(input).val())) {
                    isInvalid(input);
                    $(invalidFeedbackId).html(invalidFeedback);
                } else {
                    isValid(input);
                }
            }
            function validateInputValue(input) {
                let invalidFeedbackId = "#" + $(input).attr("id") + "-invalid-feedback";
                let invalidFeedbackDefault = $(invalidFeedbackId).html();
        
                if (!$(input).val()) {
                    isInvalid(input);
                    $(invalidFeedbackId).html(invalidFeedbackDefault);
                
                } else {
                    isValid(input);
                }
            }
        }


        request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
        request.send();
    }
    
});

