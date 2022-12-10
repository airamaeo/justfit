function myFunction(event){

    event.preventDefault();
    var y = document.getElementById("at").value;
    document.getElementById("details").innerHTML = "A password reset link has been sent to your email address on file! If you have not yet received an email, check your Spam folder, or try again."
    hide();
}
function hide(){
  document.getElementById("form").style.display = "none"
}
