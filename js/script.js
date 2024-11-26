function convert() {
    const inputValue = document
     .getElementById("userInput").value;
    const unit = document.getElementById(
     'unit').value;
    const milesToKm = unit ===
     'milesToKm';
    let result = 0;
    let resultString = "";
    if (milesToKm === true) {
     result = inputValue * 1.60934;
     resultString = inputValue +
      " millas son " + result + " km";
    } else {
     result = inputValue / 1.60934;
     resultString = inputValue +
      " km son " + result + " millas";
    }
   
    console.log(resultString);
    const resultElement = document
     .getElementById('resultElement');
    resultElement.innerHTML =
     resultString;
   }