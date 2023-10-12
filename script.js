function changeColor() {
  document.querySelector("#p1").style.color = "red";
  document.querySelector("#p1").style.backgroundColor = "black";
  document.querySelector("#p1").style.padding = "20px";
}

function hideFn() {
  document.querySelector("#p1").style.visibility = "hidden";
}
function showFn() {
  document.querySelector("#p1").style.visibility = "visible";
}

function getFullname() {
  let val = document.getElementById("inputField").value;
  console.log(val);
}
