function btnCalcular () {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value.replace(",", "."));
    let inputs = document.querySelectorAll("input");
    const displayResult = document.querySelector(".result");
    
    let hasEmptyInput = false;
    
    inputs.forEach(function(inputs) {
        if (inputs.value === "") {
            hasEmptyInput = true;
        }
    });
    
    if (hasEmptyInput) {
        displayResult.innerHTML = "Digite um valor";
    } else {
        let resultado = weight / (height * height);
        displayResult.innerHTML = resultado.toFixed(2);
    }

}

function btnClear() {
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let displayClear = document.querySelector(".result");

    weight.value.length > 0 || height.value.length > 0
    weight.value = "";
    height.value = "";
    displayClear.innerHTML = "";
}


