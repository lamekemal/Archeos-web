//<script type="text/javascript">

/* Language Browser Language Detection and Redirect Version 1.0 
August 21, 2010 Will Bontrager https://www.willmaster.com/ 
Copyright 2010 Bontrager Connection, LLC Bontrager Connection, 
LLC grants you a royalty free license to use or modify this 
software provided this notice appears on all copies. This software 
is provided "AS IS," without a warranty of any kind. */ 

var Destination = new Array();

// Leave line as is. 
// Two customization steps -- 
// 
// Step 1: 
// Specify each applicable language code and its URL, 
// one line per code, in this format: 
// 
// Destination["code"] = "https://www.willmaster.com/blog/"; 

Destination["en-au"] = "https://www.willmaster.com/blog/au.html"; 
Destination["en-us"] = "https://www.willmaster.com/blog/us.html"; 
Destination["en"] = "https://www.willmaster.com/blog/english.html"; 
Destination["es"] = "https://www.willmaster.com/blog/spanish.html"; 
Destination["ru"] = "https://www.willmaster.com/blog/russian.html"; 
Destination["ar-sa"] = "https://www.willmaster.com/blog/saudi.html"; 

// Step 2: 
// Specify the default destination URL for when none of 
// the above match. (May be blank for no default redirect.) 

var DefaultDestination = "https://www.willmaster.com/"; 

// No other customization required. // 
////////////////////////////////////// 

var lang = navigator.language ? navigator.language : 
           navigator.browserlanguage ? navigator.browserlanguage : 
           navigator.systemLanguage ? navigator.systemLanguage : 
           navigator.userLanguage ? navigator.userLanguage : 
           '---'; 
           
lang = lang.toLowerCase(); 
var dest = new String(); 
for(var t in Destination) {
    if( t == lang ) { 
        dest = Destination[t];
        break; 
    } 
} 

if( dest.length == 0 ) { 
    lang = lang.substr(0,2); 
    for( var t in Destination ) { 
        if( t == lang ) { 
            dest = Destination[t]; 
            break; 
        } 
    } 
} 

if( dest.length == 0 ) { 
    dest = DefaultDestination; 
}

if( dest.length > 0 ) { 
    location.href = dest; 
}
//</script> 
