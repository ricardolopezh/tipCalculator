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

	//Check if number of people is greater than 0
	if (nOfPeople === "" || nOfPeople <= 1)
	{
		nOfPeople = 1;
		//Do not display de word each
	} else {
		//Display the word each
	}

	//Calculate tip
	var tip = (billAmount * (serviceQuality/100)) / nOfPeople;
	tip = Math.round(tip * 100) / 100;
	tip = tip.toFixed(2);

	alert("The total is: " + tip)
}

//Click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};