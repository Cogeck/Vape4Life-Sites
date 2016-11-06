function ComunicateWithServer(jsonData, functionName, succesCallback, deniedCallback) {
	$.ajax({
		type: "POST",
		url: "http://localhost:63913/Services/ServiceController.asmx/" + functionName + "",
		crossDomain: true,

		beforeSend: function (xhr) {
			xhr.setRequestHeader("Content-type",
								 "application/json; charset=utf-8");
		},

		data: JSON.stringify(jsonData),
		dataType: 'json',
		cache: false,

		success: function (msg) {
			if (msg.d.AlloewdToReload === true) {

				for (var i = 0; msg.d.JS.length > i; i++) {
					var js = msg.d.JS[i];
					$.getScript(js, function (data, textStatus, jqxhr) {
						console.log(data); // Data returned
						console.log(textStatus); // Success
						console.log(jqxhr.status); // 200
						console.log("Load was performed.");
					});
				}

				for (var i = 0; msg.d.CSS.length > i; i++) {
					var cs = msg.d.CSS[i];
					$("head").append('<link rel="stylesheet" href="' + cs + '" type="text/css">');
				}

				for (var i = 0; msg.d.HTML.length > i; i++) {
					var html = msg.d.HTML[i];
					succesCallback(html);
				}
			}
			else {
				deniedCallback();
			}
		},
		error: function (msg) {
			alert("Ein Fehler ist aufgetreten, bitte informieren Sie unseren Support.");
		}
	});
}

function ComunicateWithServer(functionName, succesCallback, deniedCallback) {
	$.ajax({
		type: "POST",
		url: "http://localhost:63913/Services/ServiceController.asmx/" + functionName + "",
		crossDomain: true,

		beforeSend: function (xhr) {
			xhr.setRequestHeader("Content-type",
								 "application/json; charset=utf-8");
		},

		data: '',
		dataType: 'json',
		cache: false,

		success: function (msg) {
			if (msg.d.AlloewdToReload === true) {

				for (var i = 0; msg.d.JS.length > i; i++) {
					var js = msg.d.JS[i];
					$.getScript(js, function (data, textStatus, jqxhr) {
						console.log(data); // Data returned
						console.log(textStatus); // Success
						console.log(jqxhr.status); // 200
						console.log("Load was performed.");
					});
				}

				for (var i = 0; msg.d.CSS.length > i; i++) {
					var cs = msg.d.CSS[i];
					$("head").append('<link rel="stylesheet" href="' + cs + '" type="text/css">');
				}

				for (var i = 0; msg.d.HTML.length > i; i++) {
					var html = msg.d.HTML[i];
					succesCallback(html);
				}
			}
			else {
				deniedCallback();
			}
		},
		error: function (msg) {
			alert("Ein Fehler ist aufgetreten, bitte informieren Sie unseren Support.");
		}
	});
}