/*
This is a library designed for creating consoles and other useful internet tools in html5 using javascript.
This library was designed by Zach Baker

This relase: Added the basic functionallity of the library. You can write, write line, skip lines, and clear.

Development Log:
Project Started - 8/5/2019 @ 21:08 - 8/5/2019 @22:00
Continue Development - 8/5/2019 @23:03 - 8/5/2019 @23:13
Release V0.1 - 8/5/2019 @23:13
*/
//Predefined Variables
var log;
var inDisplay;
//Initialization, this should be declared in a script at the top of your code
function initializeTextwindowLib(output, input) {
  log = document.getElementById(output);
  inDisplay = document.getElementById(input);
  log.innerHTML = "";
  return log;
}
//Main Function Handler
var TextWindow = function () {
  return log.innerHTML;
}
TextWindow.WriteLine = function (text) {
  wln(text);
}
TextWindow.Write = function (text) {
  w(text);
}
TextWindow.Clear = function () {
  clr();
}
TextWindow.SkipLines = function (num) {
  nxtln(num);
}
//Shortcuts
//Init shortcut
function initTWL(output, input) {
  initTextwindowLib(output, input);
}
//Write line
function wln (text) {
  var data;
  data = log.innerHTML;
  data = data.concat(text);
  data = data.concat("<br>");
  log.innerHTML = data;
}
//Clear log
function clr () {
  log.innerHTML = "";
}
//Write
function w (text) {
  var data;
  data = log.innerHTML;
  data = data.concat(text);
  log.innerHTML = data;
}
//Skip x lines
function nxtln (num) {
  var data;
  data = log.innerHTML;
  for(i = 0; i < num; i++) {
    data = data.concat("<br>");
  }
  log.innerHTML = data;
}
