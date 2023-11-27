
function sweetSuccess() {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
	confirmButtonColor: '#247cd4',
    text: 'You have succeessfully registered. \n A comfirmation email will be sent to you.',
  });
}

function check(){
	
	var user=document.getElementById('user').value;
	var mail=document.getElementById('email').value;
	var pass=document.getElementById('pass').value;
	var passconf=document.getElementById('pass2').value;
	if(user!=""&&mail!=""&&pass!=""&&passconf!=""){
		sweetSuccess();
	}
	else{
		sweetFailure();
	}
}


function validatePassword(){
	var pass = document.getElementById("pass")
  , pass2 = document.getElementById("pass2");
  if(pass.value != pass2.value) {
    pass2.setCustomValidity("Passwords Don't Match");
  } else {
    pass2.setCustomValidity('');
  }
}

function sweetFailure(){
	Swal.fire({
    icon: 'error',
    title: 'Error!',
	confirmButtonColor: '#247cd4',
    text: 'Please fill all fields.',
  });
}