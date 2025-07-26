const input = document.getElementById("pounds");
const gramsOutput = document.getElementById("grams");
const kilogramsOutput = document.getElementById("kiloGrams");
const ouncesOutput = document.getElementById("ounces");
const outputSection = document.getElementById("output");

outputSection.style.visibility = "hidden";
input.addEventListener("input", () => {
    if (input.value) {
        outputSection.style.visibility = "visible";
    } else {
        outputSection.style.visibility = "hidden";
    }
});

input.addEventListener("change", (e) => {
    const pounds = e.target.value;
    gramsOutput.textContent = (pounds * 453.59237).toFixed(2);
    kilogramsOutput.textContent = (pounds * 0.45359237).toFixed(2);
    ouncesOutput.textContent = (pounds * 16).toFixed(2);
});
