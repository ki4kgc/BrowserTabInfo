function getTabInfo () {
	// This fetches the information from chrome API

	var url;
	var id 

	chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
    url = tabs[0].url;
    id = tabs[0].index;
    document.getElementById("infoField").innerHTML = 'The url for this tab is: ' + url + ' and the id is: ' + id; 
	});
}

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

// Code adapted from chromium merge windows example 
// http://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/api/windows/merge_windows/
var output = '';
var targetWindow = null;
var tabCount = 0;

function start(tab) {
  chrome.windows.getCurrent(getWindows);
}

function getWindows(win) {
  targetWindow = win;
  chrome.tabs.getAllInWindow(targetWindow.id, getTabs);
}

function getTabs(tabs) {
  tabCount = tabs.length;
  // We require all the tab information to be populated.
  chrome.windows.getAll({"populate" : true}, moveTabs);
}

function moveTabs(windows) {
  var numWindows = windows.length;
  var tabPosition = tabCount;
  var url = '';

  output += '<b>You have ' + numWindows + ' windows open</b><br>***********************************<br>';
  for (var i = 0; i < numWindows; i++) {
    var win = windows[i];
	var numTabs = win.tabs.length;
	output += '<b>There are ' + numTabs + ' tabs in window ' + i + '</b><br>___________________________<br>';

	for (var j = 0; j < numTabs; j++) {
		var tab = win.tabs[j];
		var url = tab.url;
		// Move the tab into the window that triggered the browser action.
		output += ' -> The url of tab ' + j + ' is ' + url + '<br>';
		//chrome.tabs.move(tab.id,{"windowId": targetWindow.id, "index": tabPosition});
		tabPosition++;
	}
  }
  document.getElementById("infoField").innerHTML = output; 
}

document.addEventListener('DOMContentLoaded', function () {
	//displayInfo();
	//getTabInfo();
	start();

});