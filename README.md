# String-Manipulations
#CSC 440 || Cilent Side Programming

(a) Write Javascript functions that will transform a string passed as parameter into various forms as shown in StringManipulations.PNG. The function names are in bold face in the figure. Read a string from a file input.txt and pass it to each function.



(b) We talked about the OWASP XSS Prevention Cheatsheet in class. In order to mitigate XSS related issues, you need to escape strings in the context of html, JavaScript and JSON. Write three different functions each of which take a string as a parameter and return an appropriately escaped string. Call the functions escapeHTML, escapsJavaScript and escapeJSON respectively. You may want to use the following functions and objects: String.prototype.replace, a regular expression for detecting non-alphanumeric characters, String.prototype.CharCodeAt, Number.prototype.toString(base).