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

		$(function(){
			helper = new CBHelper("mopub14_labb5", "ed86229afa03c22b4fd0139c60d0bb5e", new GenericHelper());
			helper.setPassword(hex_md5("mopub14_labb5"));

		var rest1 = {    "Name": "Mathias Dahlgren Matbaren",
	    				"ID": "1",
	    				"Description": "Natural taste and natural produce are essential for natural cuisine",
	   					 "Address": "Sodra Blasieholmshamnen 6, Stockholm",
						    "Category": "Swedish",
						    "Price Range": "$$$$",
						    "Rating": "5"
				};

		var rest2 = {
		    "Name": "Fotografiska",
		    "ID": "2",
		    "Description": "Our kitchen pride themselves on the same excellent quality and standard as the rest of the museum.",
		    "Address": "Stadsgardshamnen 22, Stockholm",
		    "Category": "Cafe",
		    "Price Range": "$$",
		    "Rating": "4"
			};

		var rest3={
		    "Name": "Wardshuset Ulla Winbladh",
		    "ID": "3",
		    "Description": "This restaurant embodies perfection in an old fashioned manner. Both the exterior & the interior design gives a graceful and appealing impression.",
		    "Address": "Rosendalsvagen 8, Stockholm",
		    "Category": "Scandinavian",
		    "Price Range": "$$$",
		    "Rating": "3"
			};	



		helper.searchDocuments(rest1, "restaurants", function(resp) {
			if(resp.callStatus && resp.outputData.length == 0){
					helper.insertDocument("restaurants", rest1, function(resp){
					console.log(resp.outputString);
					});
				}
			});

		helper.searchDocuments(rest2, "restaurants", function(resp) {
			if(resp.callStatus && resp.outputData.length == 0){
					helper.insertDocument("restaurants", rest2, function(resp){
					console.log(resp.outputString);
					});
				}
			});

		helper.searchDocuments(rest3, "restaurants", function(resp) {
			if(resp.callStatus && resp.outputData.length == 0){
					helper.insertDocument("restaurants", rest3, function(resp){
					console.log(resp.outputString);
					});
				}
			});
			
				helper.searchDocuments({}, "restaurants", function(resp){
			
			console.log(resp.outputString);
			$(".restName1").text(resp.outputData[0].Name);
			$(".restName2").text(resp.outputData[1].Name);
			$(".restName3").text(resp.outputData[2].Name);


			$(".description1").text(resp.outputData[0].Description);
			$(".description2").text(resp.outputData[1].Description);
			$(".description3").text(resp.outputData[2].Description);
			

			$(".category1").text(resp.outputData[0].Category);
			$(".category2").text(resp.outputData[1].Category);
			$(".category3").text(resp.outputData[2].Category);

		});
			
		
		
		});
