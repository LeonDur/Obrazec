
document.addEventListener("DOMContentLoaded", function() {
document.getElementById('button').addEventListener('click', function () {
	event.preventDefault();
	var user=document.getElementById("user").value;
	var pass=document.getElementById("pass").value;
	if(user=="admin"&&pass=="admin"){
		sweetSuccess();
		document.getElementById("pass").value = "";
        		document.getElementById("user").value = "";
	}
	else{
		sweetFailure();
	}
	
  });
});

function sweetSuccess() {
	var user=document.getElementById("user").value;
  Swal.fire({
    icon: 'success',
    title: 'Success!',
	confirmButtonColor: '#247cd4',
    text: 'Hello '+user+','+ 'you\'ve been logged in.',
  });
}
function sweetFailure(){
	Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: 'Your credentials are incorrect.',
  });
}