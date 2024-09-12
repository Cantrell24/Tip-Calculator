const btnEl = document.getElementById("calculate");
const clearBtnEl = document.getElementById("clear");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = `$${totalValue.toFixed(2)}`;
}

function clearFields() {
    billInput.value = ''; // Clear bill input
    tipInput.value = ''; // Clear tip input
    totalSpan.innerText = '$0.00'; // Reset total to $0.00
}

btnEl.addEventListener("click", calculateTotal);

clearBtnEl.addEventListener("click", clearFields);