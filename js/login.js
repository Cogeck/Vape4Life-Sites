function succesCallback(html){
	$('#ReloadContainer').load(html);	
}

function deniedCallback (){	
	$('#ReloadContainer').empty();
	$('#ReloadContainer').append("Bitte versuchen sie es noch einmal");
}

function Login(user, pw){	   
	var userData = {email:user,password:pw};
	var userObject = {user:JSON.stringify(userData)};

	ComunicateWithServer(userObject,"CheckIfUserAlloewdAccess", succesCallback, deniedCallback);
}