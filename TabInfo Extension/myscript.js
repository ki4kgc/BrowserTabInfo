function displayInfo() {
	
	var output = '';

	//fetch number of windows
	var numWindows = 3;
	//print you have 'numWindows' windows
	output += '<b>You have ' + numWindows + ' windows open</b><br>';
	for (var i = 0; i<numWindows; i++){
		//fetch number of tabs from each window
		var numTabs = 3;
		//print you have 'numTabs' tabs in window i
		output += 'There are ' + numTabs + ' tabs in window ' + i + '<br>';
		for(var j =0; j<numTabs; j++){
			//print name and url of j'th tab
			output += ' -> The title of tab ' + j + ' is ' + 'temp page title and url' + '<br>';
		}
	}
	document.getElementById("infoField").innerHTML = output; 
	
}

document.addEventListener('DOMContentLoaded', function () {
	displayInfo();

});