/*
This is a library designed for creating consoles and other useful internet tools in html5 using javascript.
This library was designed by Zach Baker

This Release: Redesigned Keylogger to have two different functions and removed arguments for TextWindow.InitializeKeylogger();

Development Log:
Project Started - 8/5/2019 @21:08 - 8/5/2019 @22:00
Continue Development - 8/5/2019 @23:03 - 8/5/2019 @23:13
Release V0.1 - 8/5/2019 @23:13
Start Development V0.2 - 8/5/2019 @23:15 - 8/6/2019 @00:00
Release V0.2 - 8/6/2019 @00:00
Start Development V0.3 - 8/6/2019 @00:00 - 8/6/2019 @00:30
Continue Development - 8/6/2019 @11:03 - 8/6/2019 @12:10
Continue Development - 8/6/2019 @12:20 - 8/6/2019 @12:28
Continue Development - 8/6/2019 @12:41 - 8/6/2019 @12:48
Continue Development - 8/6/2019 @12:55 - 8/6/2019 @12:58
Continue Development - 8/6/2019 @13:26 - 8/6/2019 @14:08
Release V0.3 - 8/6/2019 @ 14:08
Start Development V0.4 - 8/6/2019 @14:08 - 8/6/2019 @14:50
Continue Development - 8/6/2019 @21:27 - 8/6/2019 @22:11
Continue Development - 8/6/2019 @12:54 - 8/6/2019 @13:14
Continue Development - 8/8/2019 @19:57 - 8/8/2019 @20:30
Continue Development - 8/9/2019 @12:09 - 8/9/2019 @12:50
*/

//Working on the wait function for Read, ReadKey, and WaitForNextKeypress



//Predefined Variables
//Initialization Variables
var log;
var logName;
var inDisplay;
var inDisplayName;
var init = false;
//Style variables
var styleInit = false;
var styleDisplay;
var styleBackground;
var styleColor;
//Keylogger variables
var keyInit = false;
var keyType;
var keyDisplay;
var keyFunction;
var keyWait;
var keyAccepted = [];
var keyData = "";





//Main Function Handler
var TextWindow = function () {
  return init;
}

TextWindow.WriteLine = function (text) {
  if (init == false) {
    return false;
  }
  var data;
  data = log.innerHTML;
  data = data.concat(text);
  data = data.concat("<br>");
  log.innerHTML = data;
  return true;
}

TextWindow.Write = function (text) {
  if (init == false) {
    return false;
  }
  var data;
  data = log.innerHTML;
  data = data.concat(text);
  log.innerHTML = data;
  return true;
}

TextWindow.Clear = function () {
  if (init == false) {
    return false;
  }
  log.innerHTML = "";
  return true;
}

TextWindow.SkipLines = function (num) {
  if (init == false) {
    return false;
  }
  var data;
  data = log.innerHTML;
  for(i = 0; i < num; i++) {
    data = data.concat("<br>");
  }
  log.innerHTML = data;
  return true;
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
    inDisplay = preDisplay;
    return false;
  }
  if (inDisplay != null) {  
    inDisplay.innerHTML = "";
  }
  log.innerHTML = "";
  init = true;
  return true;
}

TextWindow.KeyEventListener = function (event) {
  if (keyInit == false) {
    return false;
  }
  if (keyType == "read") {
    if (keyAccepted.indexOf(event.keyCode) > -1) {
      keyData = keyData.concat(String.fromCharCode(event.keyCode));
    } else if (event.keyCode == 13) {
      if (keyFunction != null) {
        eval(keyFunction + "(\"" + keyData + "\");");
      }
      keyData = "";
      keyDisplay = null;
      keyFunction = null;
      keyType = null;
      keyWait = false;
    } else if (event.keyCode == 8) {
      keyData = keyData.slice(0, -1);
    }
  } else if (keyType == "readkey") {
    if(keyAccepted.indexOf(event.keyCode) > -1) {
      keyData = keyData.concat(String.fromCharCode(event.keyCode));
      if (keyFunction != null) {
        eval(keyFunction + "(\"" + keyData + "\");");
      }
      keyData = "";
      keyDisplay = null;
      keyFunction = null;
      keyType = null;
      keyWait = false;
    }
  } else if (keyType == "waitforkey") {
    keyData = "";
    keyDisplay = null;
    keyFunction = null;
    keyType = null;
    keyWait = false;
  } else {
    return false;
  }
  return true;
}

TextWindow.InitializeKeylogger = function () {
  if (init == false) {
    return false;
  }
  document.addEventListener("keydown", TextWindow.KeyEventListener);
  keyAccepted = [32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
  keyInit = true;
  return true;
}

TextWindow.TerminateKeylogger = function () {
  if (keyInit == false) {
    return false;
  }
  document.removeEventListener("keydown", TextWindow.KeyEventListener);
  keyInit == false;
  return true;
}

TextWindow.InitializeStyle = function (styleTagID) {
  if (init == false) {
    return false;
  }
  styleDisplay = document.getElementById(styleTagID);
  if (styleDisplay != null) {
    styleColor = "black";
    styleBackground = "white";
  } else {
    return false;
  }
  styleInit = true;
  return true;
}

TextWindow.CompileStyle = function () {
  if (styleInit == false) {
    return false;
  }
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
  return true;
}

TextWindow.SetBackgroundColor = function (color) {
  if (styleInit == false) {
    return false;
  }
  styleBackground = color;
  TextWindow.CompileStyle();
  return true;
}

TextWindow.SetTextColor = function (color) {
  if (styleInit == false) {
    return false;
  }
  styleColor = color;
  TextWindow.CompileStyle();
  return true;
}

TextWindow.KeyloggerUpdateDisplay = function () {
  if (keyInit == false) {
    return false;
  }
  if (inDisplay != null) {
    inDisplay.innerHTML = ktData;
    return true;
  } else {
     return false;
  }
}

TextWindow.KeyEventHandler = function (type, display, functionOut, wait) {
  if (display == true) {
    if (inDisplay == null) {
      return false;
    }
  }
  if (keyInit == false) {
    return false;
  }
  if (display == null) {
    display = false;
  }
  if (wait == null) {
    wait = false;
  }
  if (type != "read" && type != "readkey" && type != "waitforkey") {
    return false;
  } else if (display != true && display != false) {
    return false;
  } else if (eval("typeof " + functionOut) != "function" && functionOut != null) {
    return false;
  } else if (keyInit == false) {
    return false;
  } else if (wait != true && wait != false) {
    return false;
  } else {
    keyType = type;
    keyDisplay = display;
    keyFunction = functionOut;
    keyWait = wait;
    return true;
  }
}

TextWindow.Read = function (showInDisplay, outputFunction) {
  if (keyInit == false) {
    return false;
  }
  if (showInDisplay == true) {
    if (inDisplay == null) {
      return false;
    }
  }
  if (outputFunction != null && eval("typeof " + outputFunction) != "function") {
    return false;
  } else {
    return TextWindow.KeyEventHandler("read", showInDisplay, outputFunction, false);
  }
}

TextWindow.ReadKey = function (outputFunction, wait) {
  if (keyInit == false) {
    return false;
  }
  if (outputFunction != null && eval("typeof " + outputFunction) != "function") {
    return false;
  } else if (wait == false) {
    return TextWindow.KeyEventHandler("readkey", false, outputFunction, false);
  } else if (wait == true) {
    TextWindow.KeyEventHandler("readkey", false, outputFunction, true);
    while (keyWait) {console.log(keyWait.toString());}
    return true;
  }
}

TextWindow.WaitForNextKeypress = function () {
  if (keyInit == false) {
    return false;
  }
  TextWindow.KeyEventHandler("waitforkey", false, null, true);
  while (keyWait);
  return true;
}

TextWindow.ChangeAccepted = function (keyCodeArray) {
  keyAccepted = keyCodeArray;
}
