let quizes = document.getElementById("quizes");
let midterm = document.getElementById("midterm");
let finalTest = document.getElementById("final-test");
let oral = document.getElementById("oral");

function calculate() {
  let q = quizes.value * 0.1;
  let m = midterm.value * 0.25;
  let f = finalTest.value * 0.5;
  let o = oral.value * 0.15;
  let sum = q + m + f + o;
  console.log(sum, q, m, f, o);
  document.getElementById("result").innerHTML = `the results = ${sum} - ${grade(
    sum
  )}`;
}
function grade(x) {
  if (90 <= x && x <= 100) {
    return "A";
  } else if (x >= 80) {
    return "B";
  } else if (x >= 70) {
    return "C";
  } else if (x >= 60) {
    return "D";
  } else {
    return "F";
  }
}
