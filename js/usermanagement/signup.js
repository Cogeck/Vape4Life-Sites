function succesCallback(html) {
	$('#logincontainer').empty();
	$('#registercontainer').load(html);
}

function deniedCallback() {

	$('#ReloadContainer').empty();
	$('#ReloadContainer').append("Bitte versuchen sie es noch einmal");
}

function SignUp() {
	ComunicateWithServer("", "SignUp", succesCallback, deniedCallback);
}