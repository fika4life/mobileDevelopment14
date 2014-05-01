
	
		$(function(){



			//adds slide effect on back and home buttons
			$('#rest1').on("click", function(){
				$.mobile.changePage("#rest-1", {transition: "slide", changeHash:false});
			});	

			$('#rest2').on("click", function(){
				$.mobile.changePage("#rest-2", {transition: "slide", changeHash:false});
			});		
			
			$('#rest3').on("click", function(){
				$.mobile.changePage("#rest-3", {transition: "slide", changeHash:false});
			});		
			
			$('.back-btn').on("click", function(){
				$.mobile.changePage("#page-1", {transition: "slide", reverse: true, changeHash:false});
			});	



			// loads restaurants into cloudbase database
			helper = new CBHelper("mopub14_labb5", "ed86229afa03c22b4fd0139c60d0bb5e", new GenericHelper());
			helper.setPassword(hex_md5("mopub14_labb5"));

			var rest1 = {    "Name": "Mathias Dahlgren Matbaren",
		    				"ID": "1",
		    				"Description": "Natural taste and natural produce are essential for natural cuisine",
		   					 "Address": "Sodra Blasieholmshamnen 6, Stockholm",
							    "Category": "Swedish",
							    "PriceRange": "$$$$"
					};

			var rest2 = {
			    "Name": "Fotografiska",
			    "ID": "2",
			    "Description": "Our kitchen pride themselves on the same excellent quality and standard as the rest of the museum.",
			    "Address": "Stadsgardshamnen 22, Stockholm",
			    "Category": "Cafe",
			    "PriceRange": "$$"
				};

			var rest3={
			    "Name": "Wardshuset Ulla Winbladh",
			    "ID": "3",
			    "Description": "This restaurant embodies perfection in an old fashioned manner. Both the exterior & the interior design gives a graceful and appealing impression.",
			    "Address": "Rosendalsvagen 8, Stockholm",
			    "Category": "Scandinavian",
			    "PriceRange": "$$$"
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


		// Prints out the restaurant information from cloudbase into html file
		helper.searchDocuments({}, "restaurants", function(resp){
			
			$(".restName1").text(resp.outputData[0].Name);
			$(".restName2").text(resp.outputData[1].Name);
			$(".restName3").text(resp.outputData[2].Name);


			$(".description1").text("Description: "+resp.outputData[0].Description);
			$(".description2").text("Description: "+resp.outputData[1].Description);
			$(".description3").text("Description: "+resp.outputData[2].Description);
			

			$(".category1").text("Category: "+resp.outputData[0].Category);
			$(".category2").text("Category: "+resp.outputData[1].Category);
			$(".category3").text("Category: "+resp.outputData[2].Category);

			$(".price-range1").text("Price Range: "+resp.outputData[0].PriceRange);
			$(".price-range2").text("Price Range: "+resp.outputData[1].PriceRange);
			$(".price-range3").text("Price Range: "+resp.outputData[2].PriceRange);

		});

		
			// adds the rating given by user to cloudbase library
			function addRating(score, restaurant){
				var condition ={
					"Restaurant": restaurant,
					"Rating": score
				}
				helper.insertDocument("ratings", condition, null);


			}
			
			// function getRating(restaurant){
				
			// 	helper.searchDocuments({"Restaurant": restaurant}, "ratings", function(resp){	
			// 	//console.log(resp.outputData[0].Rating);
			// 	//rate1_score = resp.outputData[0].Rating;
			// 	//alert(resp.outputString);
			// 	//alert(rate1_score);
			// 	var sum=0;
			// 	for (var i=0; i<resp.outputData.length; i++){
			// 		sum +=resp.outputData[i].Rating;
			// 	}
			// 	average = sum/resp.outputData.length;
			// 	console.log("the average is:" + average);
			// 	avgrate = average;
			// 	})
			// }
				
			// new getRating("Mathias Dahlgren Matbaren");



			function getRating(restaurant){
				var restaurant = restaurant;
				helper.searchDocuments({"Restaurant": restaurant}, "ratings", function(resp){	
				//console.log(resp.outputData[0].Rating);
				//rate1_score = resp.outputData[0].Rating;
				//alert(resp.outputString);
				//alert(rate1_score);
				var sum=0;
				for (var i=0; i<resp.outputData.length; i++){
					sum +=resp.outputData[i].Rating;
				}
				average = sum/resp.outputData.length;
				average = average.toFixed(2);
				//console.log("the average is:" + average);
				
				if(restaurant == "Mathias Dahlgren Matbaren" ){
					document.getElementById('rating1').innerHTML="Average user rating: " + average;
				}else if(restaurant == "Fotografiska"){
						document.getElementById('rating2').innerHTML="Average user rating: " + average;
				} else{
					document.getElementById('rating3').innerHTML="Average user rating: " + average;

				}
				});

			}
			getRating("Mathias Dahlgren Matbaren");
			getRating("Fotografiska");
			getRating("Wardshuset Ulla Winbladh");

			
			//onsole.log("avgrate is:" + avgrate);
			//$("div.rating1").raty({readOnly:true,score:});

			//$("div.rating2").raty({readOnly:true,score:4});
			//$("div.rating3").raty({readOnly:true,score:5});



			function addComment(restaurant, comment){
				var condition1 ={
					"Restaurant": restaurant,
					"Comment": comment
				}
				helper.insertDocument("comments", condition1, function(resp){
					//console.log(resp.outputString);
				})


			}
			function getComment(restaurant){
				
				helper.searchDocuments({"Restaurant": restaurant}, "comments", function(resp){	
				//console.log(resp.outputData[0].Rating);
				//rate1_score = resp.outputData[0].Rating;
				//alert(resp.outputString);
				//alert(rate1_score);
				var comments = "";
				if(resp.callStatus&&resp.outputData.length>0 ){
					for (var i=0; i<resp.outputData.length; i++){
					comments += resp.outputData[i].Comment + "<br> <br>";
					}
					
				}
				
				if(restaurant == "Mathias Dahlgren Matbaren" ){
					document.getElementById('old-comments1').innerHTML=comments;
				}else if(restaurant == "Fotografiska"){
						document.getElementById('old-comments2').innerHTML=comments;
				} else{
					document.getElementById('old-comments3').innerHTML=comments;
				}
				});

			}
			getComment("Mathias Dahlgren Matbaren");
			getComment("Fotografiska");
			getComment("Wardshuset Ulla Winbladh");

			$("div.rate1").raty({
				  click: function(score) {
 					addRating(score, "Mathias Dahlgren Matbaren");
 					alert('Thank you for your input!');
 					}
					});


			$("div.rate2").raty({
				  click: function(score) {
    				//alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt);
 					 addRating(score, "Fotografiska");
 					 alert('Thank you for your input!');
 					 }
					});
			$("div.rate3").raty({
				  click: function(score) {
    				//alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt);
 					 addRating(score, "Wardshuset Ulla Winbladh");
 					 alert('Thank you for your input!');

 					 }
					});
			

			// Javascript for comments retrieval to Cloudbase
			$("#comment-form").submit(function(event){
				//alert('Submit is clicked');
				var $comment = $("#comment1").val();
				var $restaurant = $("h3.restName1").text();
			
				addComment($restaurant,$comment);
				alert("Thank you for your input!");
			
				event.preventDefault();
			});
			
		
			$("#comment-form2").submit(function(event){
				//alert('Submit is clicked');
				var $comment = $("#comment2").val();
				var $restaurant = $("h3.restName2").text();
			
				addComment($restaurant,$comment);
				alert("Thank you for your input!");
			
				event.preventDefault();
			});				
			
			$("#comment-form3").submit(function(event){
				//alert('Submit is clicked');
				var $comment = $("#comment3").val();
				var $restaurant = $("h3.restName3").text();
			
				addComment($restaurant,$comment);
				alert("Thank you for your input!");
			
				event.preventDefault();
			});			
		
	});