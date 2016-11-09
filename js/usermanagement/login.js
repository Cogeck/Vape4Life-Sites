function succesCallback(html) {
	$('#reloadcontainer').load(html);
}

function deniedCallback() {
	$('#reloadcontainer').empty();
	$('#reloadcontainer').append("Bitte versuchen sie es noch einmal");
}

function Login(user, pw) {
	var userData = { email: user, password: pw };
	var userObject = { user: JSON.stringify(userData) };

	ComunicateWithServer(userObject, "CheckIfUserAlloewdAccess", succesCallback, deniedCallback);
}


function SignUp() {

	ComunicateWithServer("SignUp", succesSignUpCallback, deniedSignUpCallback);
}

function succesSignUpCallback(html) {
	$('#logincontainer').empty();
	$('#registercontainer').load(html);
}

function deniedSignUpCallback() {

}
