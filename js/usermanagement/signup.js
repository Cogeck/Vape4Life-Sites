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
	 	 $('#logincontainer').empty();
		 $('#registercontainer').load(msg.d.HTML);
     },
	 error: function(msg) {
		alert("ERROR");		
	 }
 });
}
