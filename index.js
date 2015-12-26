var emailLog = require ('./emaillog.json');
var emailCheckr = require ('./emailhell.js');
//console.log(emailCheckr);
//the emaillog will be an object with a key named "emails".  The value paired with this
//key "emails" is an array.  Each index in this array is another object, each having
//the key: "email" and the value being info on the recipient.  So to access this
//array of objects, we can save this value by assigning a variable with the method
//calling for the key from emailLog of "emails" which will give us the array:
var emailArray = emailLog.emails;
//var module will now be assigned to emailChecker which brings up the emailhell.js
//file and will invoke the function that was designated as exportable with "exports".
//this variable "module" will also dump our trimmed emailLog we named "emailArray" into
//this function replacing the variable 'log' found there
var module = emailCheckr(emailArray);
