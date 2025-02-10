
function Addition() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
}

function Subtraction() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
}

function Multiplication() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
}

function Division() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
}

function Modulus() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
}

function Print() {
  document.getElementById("demo").innerHTML = "The remainder of " + x + " and " + y + " is " + (x % y) + ".";
}


function Addition() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  Print("The sum of " + x + " and " + y + " is " + (x + y) + ".");
}

function Subtraction() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  Print("The difference of " + x + " and " + y + " is " + (x - y) + ".");
}

function Multiplication() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  Print("The product of " + x + " and " + y + " is " + (x * y) + ".");
}

function Division() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  Print("The quotient of " + x + " and " + y + " is " + (x / y) + ".");
}

function Modulus() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  Print("The remainder of " + x + " and " + y + " is " + (x % y) + ".");
}

function Print(result) {
  document.getElementById("demo").innerHTML = result;
}