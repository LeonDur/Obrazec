function checkIme() {
				var inputField = document.getElementById("ime");
				var inputValue = inputField.value;
				const namePattern =  /^[A-Za-z]+$/;

				if (inputValue.match(namePattern)) {
				}else{
					inputField.textContent=inputValue.slice(0,-1);
					Swal.fire({
					icon: 'warning',
					title: 'Napaka!',
					text: 'Prosim, vpisite le crke!',
				  });
				  
				}
}
function sweetSuccess() {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Your operation was successful.',
  });
}

function check(){
	checkIme()
}