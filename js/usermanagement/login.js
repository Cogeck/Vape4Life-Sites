function Login(user, pw){
	   
var userData = {email:user,password:pw};
var userObject = {user:JSON.stringify(userData)};

 $.ajax({
	
	 type: "POST",
     url: "http://localhost:63913/Services/ServiceController.asmx/CheckIfUserAlloewdAccess",
     crossDomain:true,
	
	 beforeSend: function(xhr) {
       xhr.setRequestHeader("Content-type", 
                            "application/json; charset=utf-8");
     },
	
	 data: JSON.stringify(userObject),
	 dataType: 'json',
	 cache: false,
	
     success: function(msg) {		
		if(msg.d.HTML != "NOPE"){ 						
			$('#reloadcontainer').load(msg.d.HTML);
		}
		else{
			$('#reloadcontainer').empty();
			$('#reloadcontainer').append("Bitte versuchen sie es noch einmal");
		}
     },
	 error: function(msg) {
		alert("ERROR");		
	 }
 });
}


function SignUp(){
	   
//var userData = {email:user};
//var userObject = {user:JSON.stringify(userData)};

 $.ajax({
	
	 type: "POST",
     url: "http://localhost:63913/Services/ServiceController.asmx/SignUp",
     crossDomain:true,
	
	 beforeSend: function(xhr) {
       xhr.setRequestHeader("Content-type", 
                            "application/json; charset=utf-8");
     },
	
	 data: '',
	 dataType: 'json',
	 cache: false,
	
     success: function(msg) {	
		 $.getScript( msg.d.JS, function( data, textStatus, jqxhr ) {});	
	 	 $('.logincontainer').empty();
		 $('#registercontainer').load(msg.d.HTML);
     },
	 error: function(msg) {
		alert("ERROR");		
	 }
 });
}

