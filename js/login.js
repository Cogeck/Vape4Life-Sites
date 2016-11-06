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

			$.getScript( msg.d.JS, function( data, textStatus, jqxhr ) {
				  console.log( data ); // Data returned
				  console.log( textStatus ); // Success
				  console.log( jqxhr.status ); // 200
				  console.log( "Load was performed." );
			});			
			
			$('#ReloadContainer').load(msg.d.HTML);
		}
		else{
			$('#ReloadContainer').empty();
			$('#ReloadContainer').append("Bitte versuchen sie es noch einmal");
		}
     },
	 error: function(msg) {
		alert("ERROR");		
	 }
 });
}