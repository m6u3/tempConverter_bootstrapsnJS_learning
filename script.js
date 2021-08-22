function celToFah(){
    //Creating formula to Convert Temps
    let temp = document.getElementById("temp").value;
    let tempInF = (temp * 9/5) + 32;
    //alert( temp + "° Celsius is " + tempInF + "° Fahrenheit.")

    //Creating <p> elemnt and text inside, appending the results.
    var pText = document.createTextNode(temp + "° Celsius is " + tempInF + "° Fahrenheit.");
    resultPage(pText);


}
function fahToCel(){
    let temp = document.getElementById("temp").value;
    let tempInC = (temp - 32) * 5/9;
    tempInC = Math.round(tempInC * 100) / 100;
    //alert(temp + "° Fahrenheit is " + tempInC + "° Celsius");
    var pText = document.createTextNode(temp + "° Fahrenheit is " + tempInC + "° Celsius.");
    resultPage(pText);
}

//Function to create result page, in both buttons just create one function, no need to work double XD.
function resultPage(pText){
    
    let para = document.createElement("p");
    para.appendChild(pText);
    //Creating <a> to reset page
    let button = document.createElement("button");
    let resetText = document.createTextNode("Reset");
    button.appendChild(resetText);
    //creating new Div For new elemnts and adding it to body
    let div2 = document.createElement("div");
    let divId = document.createAttribute("id");
    divId.value = "results";
    div2.setAttributeNode(divId);
    let divClass = document.createAttribute("class");
    divClass.value = "container text-center text-success";
    div2.setAttributeNode(divClass);
    
    //getting Body to append new div
     let body = document.getElementById("body1");
     body.appendChild(div2);

    div2.appendChild(para);
    div2.appendChild(button);
    
    //adding atributes for class and auto bootstraps style. for button
    let primaryButton = document.createAttribute("class");
    primaryButton.value = "btn btn-primary";
    button.setAttributeNode(primaryButton);
    //adding href event to button.
    let onclick = document.createAttribute("onclick");
    onclick.value = "reset()";
    button.setAttributeNode(onclick);
    //Making FIrst Div Disappear

    let inputResult = document.getElementById("input-result");
    let InputDisplay = document.createAttribute("style");
    InputDisplay.value = "display: none;"
    inputResult.setAttributeNode(InputDisplay);
}

function reset(){
    alert("you are resetting");
    location.reload();
}