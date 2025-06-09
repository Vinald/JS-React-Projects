const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const people = document.querySelector("#people");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const totalPerPerson = document.querySelector("#person-amount");
const reset = document.querySelector("#reset");

const calculateTip = () => {
    const billValue = parseFloat(bill.value);
    const tipValue = parseFloat(tip.value);
    const peopleValue = parseFloat(people.value);

    if (billValue === 0 || peopleValue === 0 || peopleValue < 1 || tipValue < 0) {
        tipAmount.textContent = "UgX 0.00";
        totalAmount.textContent = "UgX 0.00";
        totalPerPerson.textContent = "UgX 0.00";
        return;
    }

    const tipAmountValue = (billValue * tipValue) / 100;
    const totalAmountValue = billValue + tipAmountValue;
    const totalPerPersonValue = totalAmountValue / peopleValue;

    tipAmount.textContent = `UgX ${tipAmountValue.toFixed(2)}`;
    totalAmount.textContent = `Ugx ${totalAmountValue.toFixed(2)}`;
    totalPerPerson.textContent = `UgX ${totalPerPersonValue.toFixed(2)}`;
};

const resetValues = () => {
    bill.value = "";
    tip.value = "";
    people.value = "";
    tipAmount.textContent = "UgX 0.00";
    totalAmount.textContent = "UgX 0.00";
    totalPerPerson.textContent = "UgX 0.00";
};

bill.addEventListener("input", calculateTip);
tip.addEventListener("input", calculateTip);
people.addEventListener("input", calculateTip);
reset.addEventListener("click", resetValues);

calculateTip();
