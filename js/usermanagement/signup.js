function succesCallback(html) {
	$('#logincontainer').empty();
	$('#registercontainer').load(html);
}

function deniedCallback() {

	$('#reloadcontainer').empty();
	$('#reloadcontainer').append("Bitte versuchen sie es noch einmal");
}

function SignUp() {
	ComunicateWithServer("SignUp", succesCallback, deniedCallback);
}