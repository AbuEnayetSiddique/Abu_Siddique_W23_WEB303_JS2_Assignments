/*
	WEB 303 Assignment 1 - jQuery
	{Abu Enayet Siddique}
*/

$(document).ready(function() {

	$('#yearly-salary').on('keyup', function() {
		calculate();
	});
	
	$('#percent').on('keyup', function() {
	   calculate();
	});
	  
	function calculate(){
		var salary = $('#yearly-salary').val();
		var salaryAmount = parseInt(salary);

		var percent = $('#percent').val();
		var percentAmount = parseInt(percent);

		var amountSpend= ((salaryAmount*percentAmount) / 100).toFixed(2);
			 
		$('#amount').text('$' + amountSpend);
		
		}

	});