function convert() {
  let celsius = document.getElementById("celsius").value;
  let fahrenheit = celsius * 1.8 + 32;
  document.getElementById("result").value = fahrenheit;
}

function sum() {
    let a = parseInt(document.getElementById("numberA").value);
    let b = parseInt(document.getElementById("numberB").value);
    let sum = a + b;
    document.getElementById("resultSum").value = sum;
}


function getInfor() {
  let name = document.getElementById("name").value;
  let add = document.getElementById("address").value;
  let date = document.getElementById("date").value;
  document.getElementById("resuilt").innerHTML = "Name: "+name + "- Address: " + add + "- Date: " +  date;
}