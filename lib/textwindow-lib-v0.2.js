/*
This is a library designed for creating consoles and other useful internet tools in html5 using javascript.
This library was designed by Zach Baker

This Release: Added the keylogger with 3 basic functions.

Development Log:
Project Started - 8/5/2019 @ 21:08 - 8/5/2019 @22:00
Continue Development - 8/5/2019 @23:03 - 8/5/2019 @23:13
Release V0.1 - 8/5/2019 @23:13
Start Development V0.2 - 8/5/2019 @23:15 - 8/6/2019 @ 00:00
*/
//Predefined Variables
var log;
var inDisplay;
var init = false;
var kt
//Keylogger
document.addEventListener("keydown", function(event) {
  if (kt == "runFunction") {
    eval(ktFunction + "(event.keyCode);");
  } else if (kt == "runRawOutputFunction") {
    eval(ktFunction + "(event);");
  } else if (kt == "runCharacterOutputFunction") {
    eval(ktFunction + "(String.fromCharCode(event.keyCode));");
  }
});
//Initialization, this should be declared in a script at the top of your code
function initializeTextwindowLib(output, input, keylogger, keyloggerFunction) {
  log = document.getElementById(output);
  inDisplay = document.getElementById(input);
  log.innerHTML = "";
  var init = true;
  if (keylogger == null || keylogger == 0 || keylogger == false) {
    kt = "none";
  } else if (keylogger == 1 || keylogger == true) {
    if (keyloggerFunction != null) {
      kt = "runFunction";
      ktFunction = keyloggerFunction;
    }
  } else if (keylogger == 2) {
    kt = "runRawOutputFunction";
    ktFunction = keyloggerFunction;
  } else if (keylogger == 3) {
    kt = "runCharacterOutputFunction";
    ktFunction = keyloggerFunction;
  } else {
    kt = "none";
  }
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
function initTWL(output, input, keylogger, keyloggerFunction) {
  initTextwindowLib(output, input, keylogger, keyloggerFunction);
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
