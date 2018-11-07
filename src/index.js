function solveExpression() {
  console.log("auik");
  var vyraz = document.getElementById("vyraz").value;

  document.getElementById("vysledek").innerHTML = "Vysledek je:" + eval(vyraz);
}
var input = document.getElementById("vyraz");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    solveExpression();
  }
});
