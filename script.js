function calculateBMI() {
    var heightInput = document.getElementById("heightInput");
    var weightInput = document.getElementById("weightInput");
    var resultDiv = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "Please enter valid values for height and weight.";
        return;
    }

    var bmi = weight / ((height * height ));
    bmi = bmi.toFixed(2);

    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    var result = "BMI: " + bmi + "<br>Category: " + category;
    resultDiv.innerHTML = result;
}
