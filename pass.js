var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*"]

var num = char[Math.floor(Math.random() * char.length)];

var s = "";
for (var i = 0; i < 16; i++) {
    s += char[Math.floor(Math.random() * char.length)];
}
console.log(s);




    //for (var i = 0; i < 16; i++) {
      //  document.getElementById("demo") = (char[Math.floor(Math.random() * char.length)]);
   // }



