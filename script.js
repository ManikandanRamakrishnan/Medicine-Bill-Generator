$(document).ready(function(){
	var value;
	 var price;
	 var quantity;
	  var medicineArray=new Array(30);
	 var priceArray=new Array(30);
	 var quantityArray=new Array(30);
	 var count=-1;
	 var countClick=0;
	var medicine=[{medicineName:"acetaminophen",price:"5"},{medicineName:"asprin",price:"20"},{medicineName:"paraacetomol",price:"30"},{medicineName:"vicks",price:"2"},{medicineName:"alprazolam",price:"3"},{medicineName:"codeine",price:"4"},{medicineName:"meloxicam",price:"7"},{medicineName:"doxycycline",price:"6"},{medicineName:"clindamycin",price:"50"},{medicineName:"cymbalta",price:"13"},{medicineName:"tramadol",price:"44"},{medicineName:"trazodone",price:"12"},{medicineName:"pantoprazole",price:"31"},{medicineName:"metoprolol",price:"33"}];
$("#nameInput").click(function(){
	
	
	$("#nameInput").keyup(function(e){
	value=$("input").val().toLowerCase();
	var len=value.length;
	$("#list").empty();
	for(var i=0;i<medicine.length;i++) {
		
		if(value==medicine[i].medicineName.substring(0,parseInt(len))){
			var  id="A"+i;
			$("#list").append("<li id='"+id+"'"+"><p>"+medicine[i].medicineName+"</p></li>");
		}
	}
	if(value==""){
		$("#list").empty();
	}
	});
	});
	    $("#nameInput").blur(function(){
		$("li").click(function(){
			var trueId=this.id;
			var slected=$(this).text();
			medicineArray[++count]=(slected);
		$("#nameInput").val(slected);
		$("#list").empty();
		for(var i=0;i<medicine.length;i++) {
			if(slected==medicine[i].medicineName) {
				price=parseInt(medicine[i].price);
				priceArray[count]=price;
				break;
			}
		}
		});
		});
		$("#numberId").blur(function(){
			quantity=parseInt($(this).val());
			quantityArray[count]=quantity;
		});
		$("#add").click(function(){
			$("#nameInput").val("");
			$("#numberId").val("");
			
		});
		$("#reset").click(function(){
			location.reload();
			
		});
		
		$("#calc").click(function(){
			if(countClick==0) {
			var total=0;
			for(var i=0;i<=count;i++) {
				total+=priceArray[i]*quantityArray[i];
				var sNo=i+1;
				$("#resultTable").append("<tr><td>"+sNo+"</td><td>"+medicineArray[i]+"</td><td>"+quantityArray[i]+"</td><td>"+priceArray[i]+"</td><td>"+priceArray[i]*quantityArray[i]+"</td></tr>");
			}
			$("#resultTable").append("<tr><td colspan='3'></td><td>Total</td><td>"+total+"</td></tr>");
			$("#tablePos").css("display","table");
			}
			countClick=1;
			
		});
});
	