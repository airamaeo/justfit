function registration()
{
	event.preventDefault();
	var fname= document.getElementById("userfirstName").value;
	var dob= document.getElementById("userDob").value;
	var email= document.getElementById("userEmail").value;
	var pwd= document.getElementById("userPassword").value;
	var lname= document.getElementById("userlastName").value;
	var gender= document.getElementById("userGender").value;
	var confirmemail= document.getElementById("userConfirmEmail").value;
	var cpwd= document.getElementById("userConfirmPassword").value;
	var addressone= document.getElementById("userAddressOne").value;
	var addresstwo= document.getElementById("userAddressTwo").value;
	var city= document.getElementById("userCity").value;
	var eircode= document.getElementById("userEirCode").value;
	var country= document.getElementById("userCountry").value;
	var phone= document.getElementById("userPhone").value;

	//email id expression code
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var eirFilter = /^[A-Z]+[0-9]+[A-Z]+[0-9]/;
	//var numbers = /^[0-9]/;


	//enter first name
	if(fname=='')
	{
		alert('Please enter your first name');
	}
	//check first name field
	else if(!letters.test(fname))
	{
		alert('Name field required only alphabet characters');
	}
	//enter last name
	else if(lname=='')
	{
		alert('Please enter your last name');
	}
	//check last name field
	else if(!letters.test(lname))
	{
		alert('Name field required only alphabet characters');
	}
	//enter date of birth
	else if(dob=='')
	{
		alert('Please enter your date of birth');
	}
	//enter gender
	else if(gender=='Gender')
	{
		alert('Please select your gender');
	}
	//enter email
	else if(email=='')
	{
		alert('Please enter your user email id');
	}
	//check email
	else if (!filter.test(email))
	{
		alert('Invalid email');
	}
	//confirm email
	else if(confirmemail=='')
	{
		alert('Please enter your user email id');
	}
	//check if email matches
	else if(email != confirmemail)
	{
		alert ('Email does not match');
	}
	//enter password
	else if(pwd=='')
	{
		alert('Please enter Password');
	}
	//confirm password
	else if(cpwd=='')
	{
		alert('Enter Confirm Password');
	}
	//validate password
	else if(!pwd_expression.test(pwd))
	{
		alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	//check if password matches
	else if(pwd != cpwd)
	{
		alert ('Password not Matched');
	}
	//enter address
	else if(addressone=='')
	{
		alert('Enter your address');
	}
	//-------------------
	//eneter second part of the address - not necessary
	// else if(addresstwo=='')
	// {
	// 	alert('Enter your address');
	// }
	//-------------------
	//enter city
	else if(city=='')
	{
		alert('Enter your city');
	}
	//enter eircode
	else if(eircode=='')
	{
		alert('Enter your eircode');
	}
	//check eircode
	else if (!eirFilter.test(eircode))
	{
		alert('Invalid eircode. Example: D12PD23');
	}
	//minimum length 5 characters
	else if(document.getElementById("userEirCode").value.length < 5)
	{
		alert ('Eircode min length is 5');
	}
	//maximum length 7 character
	else if(document.getElementById("userEirCode").value.length > 7)
	{
		alert ('Eircode max length is 7');
	}
	//enter country
	else if(country=='SELECT COUNTRY')
	{
		alert('Enter your country');
	}
	//enter phone number
	else if(phone=='')
	{
		alert('Enter your phone number');
	}
	//check for only numeric characters
	// else if(!numbers.test(number))
	// {
	// 	alert('Phone Number field required only numeric characters');
	// }
	else{
			//code to hide the form after filling + give confirmation number and message
			const random = Math.random() * (100000000000-10000000000)+1;
			document.getElementById("titleshow").innerHTML = "Month Membership Confirmation";
			document.getElementById("confirmationNumber").innerHTML = "Your confirmation number is #" + Math.round(random);
			document.getElementById("message").innerHTML = "Thank you, " + fname + " " + lname + " for registering with us. <br/> Now just come in to any of the gyms and we will get you started!";
			document.getElementById("greeting").innerHTML = "We are waiting for You! <br/> <img src=signtoworkout.jpg>";

			// var image = document.createElement("img");
			// image.src = "images/classes_img/gym1.png"
			// document.body.appendChild(image);
			hide();

			function hide(){
				document.getElementById("form1").style.display = "none"
				document.getElementById("title-hide").style.display = "none"
			}
			
	}
}


//function to clear the form at any moment
function clearFunc()
{
	document.getElementById("userfirstName").value="";
	document.getElementById("userDob").value="";
	document.getElementById("userEmail").value="";
	document.getElementById("userPassword").value="";
	document.getElementById("userlastName").value="";
	document.getElementById("userGender").value="";
	document.getElementById("userConfirmEmail").value="";
	document.getElementById("userConfirmPassword").value="";
	document.getElementById("userAddressOne").value="";
	document.getElementById("userAddressTwo").value="";
	document.getElementById("userCity").value="";
	document.getElementById("userEirCode").value="";
	document.getElementById("userCountry").value="";
	document.getElementById("userPhone").value="";
}

