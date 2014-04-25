		$(document).on("pageinit", "#page-1", function(){

		//adds slide effect on back and home buttons
		$('#rest1').on("click", function(){
			$.mobile.changePage("#rest-1", {transition: "slide", changeHash:false});
		});	

		$('#rest2').on("click", function(){
			$.mobile.changePage("#rest-2", {transition: "slide", changeHash:false});
		});		
		
		$('#page-1').on("click", function(){
			$.mobile.changePage("#rest3", {transition: "slide", changeHash:false});
		});		
		
		$('#back-btn').on("click", function(){
			$.mobile.changePage("#page-1", {transition: "slide", reverse: true, changeHash:false});
		});		
		});
