var charSpecEl = document.querySelector("#charSpec");
var charUpperEl = document.querySelector("#charUpper");
var charLowerEl = document.querySelector("#charLower");
var charNumEl = document.querySelector("#charNum");
var charLongEl = document.querySelector("#charLong");
var gernerateEl = document.querySelector("#generate");
var copyEl = document.querySelector("#copy");

var charLong = charLongEl.checked;
var charSpec = charSpecEl.checked;
var charUpper = charUpperEl.checked;
var charLower = charLowerEl.checked;
var charNum = charNumEl.checked;

gernerateEl.addEventListener("click", activate);


function activate() {
    var charLength = charLongEl.value;
    var charSpec = charSpecEl.checked;
    var charUpper = charUpperEl.checked;
    var charLower = charLowerEl.checked;
    var charNum = charNumEl.checked;
console.log(charSpec);
console.log(charUpper);
console.log(charLower);
console.log(charNum);
console.log(charLength);

if(charLength >= 8 && charLength <= 128){
    if (charSpec == true && charUpper === true && charLower === true && charNum === true) {
        var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
         "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
         "!", "@", "#", "$", "%", "^", "&", "*"]
        var num = char[Math.floor(Math.random() * char.length)];
        
            var s = "";
            for (var i = 0; i < charLength; i++) {
                s += char[Math.floor(Math.random() * char.length)];
            }
            console.log(s);
            document.getElementById("password").innerHTML = s;
        
            //2--
} else if (charSpec == true && charUpper === true && charLower === true && charNum === false){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
      
     "!", "@", "#", "$", "%", "^", "&", "*"]

    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //3 -- 
} else if (charSpec == true && charUpper === true && charLower === false && charNum === true){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //4--
}else if (charSpec == true && charUpper === true && charLower === false && charNum === false){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //5 
}else if (charSpec == true && charUpper === false && charLower === true && charNum === true){
    var char = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //6  
}else if (charSpec == true && charUpper === false && charLower === true && charNum === false){
    var char = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //7  
}else if (charSpec == true && charUpper === false && charLower === false && charNum === true){
    var char = [ 
     
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //8  
}else if (charSpec == true && charUpper === false && charLower === false && charNum === false){
    var char = [ 
     
      
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
}else if (charSpec == false && charUpper === true && charLower === true && charNum === true) {
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //2--
} else if (charSpec == false && charUpper === true && charLower === true && charNum === false){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
      
     "!", "@", "#", "$", "%", "^", "&", "*"]

    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //3 -- 
} else if (charSpec == false && charUpper === true && charLower === false && charNum === true){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //4--
}else if (charSpec == false && charUpper === true && charLower === false && charNum === false){
    var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //5 
}else if (charSpec == false && charUpper === false && charLower === true && charNum === true){
    var char = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //6  
}else if (charSpec == false && charUpper === false && charLower === true && charNum === false){
    var char = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
     
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //7  
}else if (charSpec == false && charUpper === false && charLower === false && charNum === true){
    var char = [ 
     
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
     "!", "@", "#", "$", "%", "^", "&", "*"]
    var num = char[Math.floor(Math.random() * char.length)];
        var s = "";
        for (var i = 0; i < charLength; i++) {
            s += char[Math.floor(Math.random() * char.length)];
        }
        console.log(s);
        document.getElementById("password").innerHTML = s;
    
    //8  
}else if (charSpec == false && charUpper === false && charLower === false && charNum === false){
    alert("YOU DO NOT DESERVE A PASSWORD!!!")
    }

copyEl.addEventListener("click", function copyToClip() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
})
} else {
    window.location.href = "boo.html";
}
}

