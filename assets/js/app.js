//Tip function
function calculateTip(){
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var nOfPeople = document.getElementById("nOfPeople").value;

	//Validate input
	if (billAmount === "" || serviceQuality == 0)
	{
		alert("Please enter values");
		return
	}

	//Calculate tip
	var tip = (billAmount * (serviceQuality/100)) / nOfPeople;
	tip = Math.round(tip * 100) / 100;
	tip = tip.toFixed(2);

	if (nOfPeople == "" || nOfPeople <= 1) 
	{
		alert("The total is: " + tip)
	} else {
		alert("The total is: " + tip + " each")
	}
	
}

//Click to call function
document.getElementById("calculate").onclick = function() {
	calculateTip();

};