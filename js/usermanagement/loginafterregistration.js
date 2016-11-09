function succesCallback(html) {
	//$.getScript(html.d.JS, function (data, textStatus, jqxhr) { });
	$('#reloadcontainer').load(html);
}

function deniedCallback() {
}

function Validate(user, email, validation) {
	var userData = { nickname: user, email: email, validationkey: validation };
	var userObject = { user: JSON.stringify(userData) };

	ComunicateWithServer(userObject, "Validate", succesCallback, deniedCallback);
}