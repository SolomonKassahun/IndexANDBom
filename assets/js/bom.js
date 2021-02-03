/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 

// declare variable that used for location purpose
var hrefVar,protocolVar,hostVar,portVar,hostNamevar;
//declare varibel that used for navigation variable
var appNameVar, appVersionVar, platformVar, lanVar, cookieVar;
// declare variable used for know info about the browser
var heightVar, widthVar, pixelDepthVar;
// declare variable used for knowking the history of the browser
var lenghtVar,stateVar;
// access the element doing work in location window
hrefVar = document.getElementsByClassName("badge")[0].innerHTML = "Href is " + window.location.href;
protocolVar = document.getElementsByClassName("badge")[1].innerHTML = "Protocol is " + window.location.protocol;
hostvar = document.getElementsByClassName("badge")[2].innerHTML = "Host  is " + window.location.host;
portVar = document.getElementsByClassName("badge")[3].innerHTML = "Port is " + window.location.port;
hostNamevar = document.getElementsByClassName("badge")[4].innerHTML = "Host Name  is " + window.location.hostname;
// display the element using navigator window in BOM
appNameVar = document.getElementsByClassName("badge")[5].innerHTML = "app name is" + window.navigator.appName;
appVersionVar = document.getElementsByClassName("badge")[6].innerHTML = "app Version is" + window.navigator.appVersion;
platformVar = document.getElementsByClassName("badge")[7].innerHTML = "Platform is" + window.navigator.platform;
lanVar = document.getElementsByClassName("badge")[8].innerHTML = "Language is" + window.navigator.language;
cookieVar = document.getElementsByClassName("badge")[9].innerHTML = "IsCookieEnabled? " + window.navigator.cookieEnabled;
// displat the screen information
widthVar = document.getElementsByClassName("badge")[10].innerHTML = "Width of browser is " + window.screen.width;
heightVar = document.getElementsByClassName("badge")[11].innerHTML = "height of browser is " + window.screen.height;
pixelDepthVar = document.getElementsByClassName("badge")[12].innerHTML = "pixel depth of browser is " + window.screen.pixelDepth;
// display the history information
lenghtVar = document.getElementsByClassName("badge")[13].innerHTML = "length is " + window.history.length;
stateVar = document.getElementsByClassName("badge")[14].innerHTML = "the state is " + window.history.state;





// Display the BOM Information on the innerHTML of the elements