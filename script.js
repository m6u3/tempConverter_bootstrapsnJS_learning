function celToFah(){
    let temp = document.getElementById("temp").value;
    let tempInF = (temp * 9/5) + 32;

    let inputResult = document.getElementById("input-result");
    inputResult.innerHTML = temp + "° Celsius is " + tempInF + "° Fahrenheit";

}
function fahToCel(){
    let temp = document.getElementById("temp").value;
    let tempInC = (temp - 32) * 5/9;
    tempInC = Math.round(tempInC * 100) / 100;
    alert(temp + "° Fahrenheit is " + tempInC + "° Celsius");
}