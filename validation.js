    
          function check_email(){
              var myemail = document.getElementById("myemail").value;
                 var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
              
            if(regex.test(myemail)){
             document.getElementById("email-error").style.color="green";
             document.getElementById("email-error").innerHTML="";
            }
            else{
              document.getElementById("email-error").style.color="red";
              document.getElementById("email-error").innerHTML="Invalid Email";
              
            }
          }
            function check_password(){
               var password = document.getElementById("password").value;
               var passwordReg =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

            if(passwordReg.test(password)){
              document.getElementById("password-error").innerHTML="";
           
            }
            else{
              document.getElementById("password-error").style.color="red";
              document.getElementById("password-error").innerHTML="Password should contain 1 alphabet, 1 special character";
             
            }

          }
       