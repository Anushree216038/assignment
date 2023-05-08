// Get the weight and height inputs and the result paragraph
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const resultParagraph = document.getElementById("result");

// Add an event listener to the calculate button
document.getElementById("calculateBtn").addEventListener("click", function() {
  // Calculate the BMI
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert height to meters
  const bmi = weight / (height * height);

  // Display the result
  resultParagraph.innerHTML = "Your BMI is: " + bmi.toFixed(2);
});
