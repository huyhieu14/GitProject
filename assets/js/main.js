function convert() {
  let celsius = document.getElementById("celsius").value;
  let fahrenheit = celsius * 1.8 + 32;
  document.getElementById("result").value = fahrenheit;
  console.log(celsius);
  console.log(fahrenheit);
}
