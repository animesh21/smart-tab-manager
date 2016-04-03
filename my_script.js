/**
 * Created by animesh on 4/3/16.
 */

console.log("in the content script");
var title = document.title;
var url = document.URL;
chrome.runtime.sendMessage({"title": title, "url": url});
