function succesCallback(html){
	$('#login-form').empty();
	$('#ReloadContainer').load(html);	
}

function deniedCallback (){	
	$('#MSGContainer').empty();
	$('#MSGContainer').append("Bitte versuchen sie es noch einmal");
}

function Login(user, pw){	   
	var userData = {email:user,password:pw};
	var userObject = {user:JSON.stringify(userData)};

	ComunicateWithServer(userObject,"CheckIfUserAlloewdAccess", succesCallback, deniedCallback);
}