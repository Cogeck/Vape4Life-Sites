function Register(user, email, pw) {

	var userData = { nickname: user, email: email, password: pw };
	var userObject = { nickname: JSON.stringify(userData) };
	//var userObject = {nickname:"test"};

	//$('#reloadcontainer').text(JSON.stringify(userObject));

	$.ajax({

		type: "POST",
		url: "http://localhost:63913/Services/ServiceController.asmx/Register",
		crossDomain: true,

		beforeSend: function (xhr) {
			xhr.setRequestHeader("Content-type",
								 "application/json; charset=utf-8");
		},

		data: JSON.stringify(userObject),
		dataType: 'json',
		cache: false,

		success: function (msg) {
			$.getScript(msg.d.JS, function (data, textStatus, jqxhr) { });
			$('#reloadcontainer').load(msg.d.HTML);
		},
		error: function (msg) {
			alert("ERROR");
		}
	});
}

