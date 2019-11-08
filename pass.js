/*var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*"]

var num = char[Math.floor(Math.random() * char.length)];
function activate() {
    var s = "";
    for (var i = 0; i < 16; i++) {
        s += char[Math.floor(Math.random() * char.length)];
    }
    console.log(s);
    document.getElementById("password").innerHTML = s;
}



    //for (var i = 0; i < 16; i++) {
      //  document.getElementById("demo") = (char[Math.floor(Math.random() * char.length)]);
   // }
*/

//* Length (must be between 8 and 128 characters)
var charLength = prompt("How many Characters would you Like? (btw 8-128)", "");
var charSpec = confirm("Would you like special characters?")
var charUpper = confirm("Would you like Upper Case Letters?")
var charLower = confirm("Would you like Lower Case Letters?")
var charNum = confirm("Would you like Numbers?")


//* Character type:


// * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

//* Numeric characters

// * Lowercase characters

// * Uppercase characters


//1--
if (charSpec == true && charUpper === true && charLower === true && charNum === true) {
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }
    //2--
} else if (charSpec == true && charUpper === true && charLower === true && charNum === false){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
      
     "!", "@", "#", "$", "%", "^", "&", "*"]

    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }  
    //3 -- 
} else if (charSpec == true && charUpper === true && charLower === false && charNum === true){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }    
    //4--
}else if (charSpec == true && charUpper === true && charLower === false && charNum === false){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }   
    //5 
}else if (charSpec == true && charUpper === false && charLower === true && charNum === true){
    var char = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }  
    //6  
}else if (charSpec == true && charUpper === false && charLower === true && charNum === false){
    var char = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }  
    //7  
}else if (charSpec == true && charUpper === false && charLower === false && charNum === true){
    var char = [ 
     
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }  
    //8  
}else if (charSpec == true && charUpper === false && charLower === false && charNum === false){
    var char = [ 
     
      
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }    
}else if (charSpec == false && charUpper === true && charLower === true && charNum === true) {
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }
    //2--
} else if (charSpec == false && charUpper === true && charLower === true && charNum === false){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
      
     "!", "@", "#", "$", "%", "^", "&", "*"]

    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }  
    //3 -- 
} else if (charSpec == false && charUpper === true && charLower === false && charNum === true){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }    
    //4--
}else if (charSpec == false && charUpper === true && charLower === false && charNum === false){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }   
    //5 
}else if (charSpec == false && charUpper === false && charLower === true && charNum === true){
    var char = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }  
    //6  
}else if (charSpec == false && charUpper === false && charLower === true && charNum === false){
    var char = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }  
    //7  
}else if (charSpec == false && charUpper === false && charLower === false && charNum === true){
    var char = [ 
     
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
    function activate() {
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    }  
    //8  
}else if (charSpec == false && charUpper === false && charLower === false && charNum === false){
    alert("YOU DO NOT DESERVE A PASSWORD!!!")
    }

if (charLength === " "){
    alert("YOU DO NOT DESERVE A PASSWORD!!!")
}

function copyToClip() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}


//2

//3

//4

//5

//6

//7

//8


