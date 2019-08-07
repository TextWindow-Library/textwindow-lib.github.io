/*
This is a library designed for creating consoles and other useful internet tools in html5 using javascript.
This library was designed by Zach Baker

This Release: Updated Keylogger and Style Events

Development Log:
Project Started - 8/5/2019 @ 21:08 - 8/5/2019 @22:00
Continue Development - 8/5/2019 @23:03 - 8/5/2019 @23:13
Release V0.1 - 8/5/2019 @23:13
Start Development V0.2 - 8/5/2019 @23:15 - 8/6/2019 @ 00:00
Release V0.2 - 8/6/2019 @00:00
Start Development V0.3 - 8/6/2019 @00:00 - 8/6/2019 @ 00:30
Continue Development - 8/6/2019 @11:03 - 8/6/2019 @ 12:10
Continue Development - 8/6/2019 @12:20 - 12:28
Continue Development - 8/6/2019 @ 12:41 - 12:48
Continue Development - 8/6/2019 @ 12:55 - 12:58
Continue Development - 8/6/2019 @ 13:26 - 14:08
Release V0.3 - 8/6/2019 @ 14:08
*/



//Predefined Variables
var log;
var logName;
var inDisplay;
var inDisplayName;
var styleDisplay;
var kt;
var ktFunction;
var ktData = "";
var styleBackground;
var styleColor;



//Keylogger
document.addEventListener("keydown", function(event) {
  if (kt == "none") {
    eval(ktFunction + "();");
  } else if (kt == "runFunction") {
    eval(ktFunction + "(event.keyCode);");
  } else if (kt == "runRawOutputFunction") {
    eval(ktFunction + "(event);");
  } else if (kt == "runCharacterOutputFunction") {
    eval(ktFunction + "(String.fromCharCode(event.keyCode));");
  } else if (kt == "runStringOutputFunction") {
    var alphabet = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    var numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
    var other = [8, 13, 37, 38, 39, 40]
    if (alphabet.indexOf(event.keyCode) > -1) {
      ktData = ktData.concat(String.fromCharCode(event.keyCode));
    } else if (numbers.indexOf(event.keyCode) > -1) {
      ktData = ktData.concat(numbers.indexOf(event.keyCode));
    } else if (event.keyCode == 8) {
      ktData = ktData.slice(0, -1);
    } else if (event.keyCode == 13) {
      eval(ktFunction + "(\"" + ktData.toString() + "\");");
      ktData = "";
    } else if (event.keyCode == 37) {
      ktData = ktData.concat("<");
    } else if (event.keyCode == 38) {
      ktData = ktData.concat("^");
    } else if (event.keyCode == 39) {
      ktData = ktData.concat(">");
    } else if (event.keyCode == 40) {
      ktData = ktData.cocnat("*");
    }
  } else if (kt == "runStringOutputFunctionWithDisplay") {
    var alphabet = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    var numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
    var other = [8, 13, 37, 38, 39, 40]
    if (alphabet.indexOf(event.keyCode) > -1) {
      ktData = ktData.concat(String.fromCharCode(event.keyCode));
    } else if (numbers.indexOf(event.keyCode) > -1) {
      ktData = ktData.concat(numbers.indexOf(event.keyCode));
    } else if (event.keyCode == 8) {
      ktData = ktData.slice(0, -1);
    } else if (event.keyCode == 13) {
      eval(ktFunction + "(\"" + ktData.toString() + "\");");
      ktData = "";
    } else if (event.keyCode == 37) {
      ktData = ktData.concat("<");
    } else if (event.keyCode == 38) {
      ktData = ktData.concat("^");
    } else if (event.keyCode == 39) {
      ktData = ktData.concat(">");
    } else if (event.keyCode == 40) {
      ktData = ktData.cocnat("*");
    }
    TextWindow.UpdateDisplay();
  }
});



//Main Function Handler
var TextWindow = function () {
  if (log == null || inDisplay == null) {
    return false;
  } else {
    return true;
  }
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

TextWindow.Initialize = function (output, input) {
  var prelog = log;
  var preDisplay = inDisplay;
  log = document.getElementById(output);
  inDisplay = document.getElementById(input);
  logName = output;
  inDisplayName = input;
  if (log == null) {
    log = prelog;
    return false;
  }
  if (inDisplay != null) {  
    inDisplay.innerHTML = "";
  }
  log.innerHTML = "";
  return true;
}

TextWindow.InitializeKeylogger = function (keylogger, keyloggerFunction) {
  if (keylogger == null || keylogger == 0 || keylogger == false) {
    kt = "none";
    return false;
  } else if (keylogger == 1 || keylogger == true) {
    if (keyloggerFunction != null) {
      if (eval("typeof " + keyloggerFunction + ";") != "function") {
        return false;
      }
      kt = "runFunction";
      ktFunction = keyloggerFunction;
      return true;
    } else {
      return false;
    }
  } else if (keylogger == 2) {
    if (keyloggerFunction != null) {
      if (eval("typeof " + keyloggerFunction + ";") != "function") {
        return false;
      }
      kt = "runRawOutputFunction";
      ktFunction = keyloggerFunction;
      return true;
    } else {
      return false;
    }
  } else if (keylogger == 3) {
    if (keyloggerFunction != null) {
      kt = "runCharacterOutputFunction";
      ktFunction = keyloggerFunction;
      return true;
    } else {
      return false;
    }
  } else if (keylogger == 4) {
    if (keyloggerFunction != null) {
      kt = "runStringOutputFunction";
      ktFunction = keyloggerFunction;
      return true;
    } else {
      return false;
    }
  } else if (keylogger == 5) {
    kt = "runStringOutputFunctionWithDisplay";
    ktFunction = keyloggerFunction;
    return true;
  } else {
    kt = "none";
    return false;
  }
}

TextWindow.InitializeStyle = function (styleTagID) {
  styleDisplay = document.getElementById(styleTagID);
  if (styleDisplay != null) {
    styleColor = "black";
    styleBackground = "white";
    return true;
  } else {
    return false;
  }
}

TextWindow.CompileStyle = function () {
  styleDisplay.innerHTML = "";
  data = "#"
  data = data.concat(logName);
  data = data.concat(" {color:");
  data = data.concat(styleColor);
  data = data.concat("; background-color:");
  data = data.concat(styleBackground);
  data = data.concat(";} #");
  data = data.concat(inDisplayName);
  data = data.concat(" {color:");
  data = data.concat(styleColor);
  data = data.concat("; background-color:");
  data = data.concat(styleBackground);
  data = data.concat(";}");
  styleDisplay.innerHTML = data;
}

TextWindow.SetBackgroundColor = function (color) {
  styleBackground = color;
  TextWindow.CompileStyle();
  return true;
}

TextWindow.SetTextColor = function (color) {
  styleColor = color;
  TextWindow.CompileStyle();
  return true;
}

TextWindow.UpdateDisplay = function () {
  if (inDisplay != null) {
    inDisplay.innerHTML = ktData;
    return true;
  } else {
     return false;
  }
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
