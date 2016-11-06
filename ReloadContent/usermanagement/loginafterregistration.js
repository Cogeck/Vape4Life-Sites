function Validate(user, email, validation) {

	var userData = { nickname: user, email: email, validationkey: validation };
	var userObject = { user: JSON.stringify(userData) };

	$.ajax({

		type: "POST",
		url: "http://localhost:63913/Services/ServiceController.asmx/Validate",
		crossDomain: true,

		beforeSend: function (xhr) {
			xhr.setRequestHeader("Content-type",
								 "application/json; charset=utf-8");
		},

		data: JSON.stringify(userObject),
		dataType: 'json',
		cache: false,

		success: function (msg) {
			$('#reloadcontainer').load(msg.d.HTML);
		},
		error: function (msg) {
			alert("ERROR");
		}
	});
}

