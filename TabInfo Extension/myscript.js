// Code adapted from chromium merge windows example 
// http://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/api/windows/merge_windows/
var output = '';	//HTML formatted output for popup
var csv = 'WindowID, TabID, Title, URL<br>';		//CSV formatted output for exporting
var targetWindow = null;
var tabCount = 0;

function start(tab) {
  chrome.windows.getCurrent(getWindows);
}

function getWindows(win) {
  targetWindow = win;
  chrome.tabs.getAllInWindow(targetWindow.id, getTabs);
  
  //chrome.widget.getWindows(getTabs);
}

function getTabs(tabs) {
  tabCount = tabs.length;
  // We require all the tab information to be populated.
  chrome.windows.getAll({"populate" : true}, listTabs);
}

function listTabs(windows) {
  var numWindows = windows.length;

  output += '<b>You have ' + numWindows + ' windows open</b><br>***********************************<br>';
  for (var i = 0; i < numWindows; i++) {
    var win = windows[i];
	var numTabs = win.tabs.length;
	output += '<b>There are ' + numTabs + ' tabs in window ' + i + '</b><br>___________________________<br>';

	for (var j = 0; j < numTabs; j++) {
		var tab = win.tabs[j];
		var url = tab.url;
		var title = tab.title;
		// Move the tab into the window that triggered the browser action.
		output += ' -> The url of tab ' + j +' named ' + title +' is ' + url + '<br>';
		//Formatted for CSV output
		// Structure= WindowID, TabID, Title, URL
		csv += i + ',' + j + ',' + title + ',' + url + '<br>';
	}
  }
  document.getElementById("infoField").innerHTML = output; 
  
}
function addCSV(){
	document.getElementById("csvArea").innerHTML = csv; 
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('csvButton').addEventListener('click', addCSV);
	start();
	
});

