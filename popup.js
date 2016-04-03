//document.write("writing from popup environment!");

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
  console.log(response);
  document.getElementById("tab-list").innerHTML += ('<a href=' + response.url + '><li>' + response.title + '<li/></a>');
});
//  alert(response);
//  var url = chrome.tabs.Tab.url;
//  document.getElementById("tab-list").innerHTML += ("<li>" + url + "<li/>");
//  console.log(response);
//});
//var url = chrome.tabs.getCurrent(function(tab) {
//  console.log(tab);
//});
//console.log(url);
//document.getElementById("tab-list").innerHTML += ("<li>" + url + "<li/>");