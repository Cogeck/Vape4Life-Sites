function succesCallback(html) {
		$('#reloadcontainer').load(html);
}

function deniedCallback() {
	$('#reloadcontainer').empty();
	$('#reloadcontainer').append("Bitte versuchen sie es noch einmal");
}

function Register(user, email, pw) {
	var userData = { nickname: user, email: email, password: pw };
	var userObject = { user: JSON.stringify(userData) };

	ComunicateWithServer(userObject, "Register", succesCallback, deniedCallback);
}
