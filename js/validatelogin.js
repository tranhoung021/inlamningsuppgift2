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
                        $("#alert-box").fadeIn("fast").delay(1000).fadeOut("slow");
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
                    validateInputValue(input, `Requires a minimum of ${min} characters`, min);
        
                    if (!$(input).val() && !$(input).prop("required")) {
                        isValid(input);
                    }
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
                let invalidFeedback = "Please enter a valid E-Mail";
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
            function validateInputValue(input, error, min = 1, max = 4096) {
                let invalidFeedbackId = "#" + $(input).attr("id") + "-invalid-feedback";
                let invalidFeedbackDefault = $(invalidFeedbackId).html();
                let invalidFeedback = error;
        
                if (!$(input).val()) {
                    isInvalid(input);
                    $(invalidFeedbackId).html(invalidFeedbackDefault);
                } else if ($(input).val().length < min) {
                    isInvalid(input);
                    $(invalidFeedbackId).html(invalidFeedback);
                } else {
                    isValid(input);
                }
            }
        }


        request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
        request.send();
    }
    
});

