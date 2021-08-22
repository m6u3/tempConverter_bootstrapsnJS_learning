function celToFah(){
    //Creating formula to Convert Temps
    let temp = document.getElementById("temp").value;
    let tempInF = (temp * 9/5) + 32;
    //alert( temp + "° Celsius is " + tempInF + "° Fahrenheit.")
    //Creating <p> elemnt and text inside, appending the results.
    let pText = document.createTextNode(temp + "° Celsius is " + tempInF + "° Fahrenheit.");
    let para = document.createElement("p");
    para.appendChild(pText);
    //Creating <buttto> to reset page
    let button = document.createElement("button");
    let resetText = document.createTextNode("Reset");
    button.appendChild(resetText);
    //Appending new elements and their contents to <div id="input-result"
    let inputResult = document.getElementById("input-result");
    inputResult.innerHTML =  "";
    inputResult.appendChild(para);
    inputResult.appendChild(button);
    //adding atributes for class and auto bootstraps style. for button
    let primaryButton = document.createAttribute("class");
    primaryButton.value = "btn btn-primary";
    button.setAttributeNode(primaryButton);
    //adding onclick event to button.
    let onclick = document.createAttribute("onclick");
    onclick.value = "reset()";
    button.setAttributeNode(onclick);

}
function fahToCel(){
    let temp = document.getElementById("temp").value;
    let tempInC = (temp - 32) * 5/9;
    tempInC = Math.round(tempInC * 100) / 100;
    alert(temp + "° Fahrenheit is " + tempInC + "° Celsius");
}

function reset(){
    alert("you are resetting");
}