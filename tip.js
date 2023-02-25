let billAmountvalue = document.getElementById("billAmount");
let percentagetip = document.getElementById("percentageTip");
let tipamountcal = document.getElementById("tipAmount");
let totalbill = document.getElementById("totalAmount");
let errorMessagered = document.getElementById("errorMessage");



function calculateButtonClick() {
    if (billAmountvalue.value === "") {
        errorMessagered.textContent = "Please Enter a Valid Input";
    } else if (percentagetip.value === "") {
        errorMessagered.textContent = "Please Enter a Valid Input";
    } else {
        errorMessagered.textContent = "";
        let billvalue = parseInt(billAmountvalue.value);
        let tipbill = parseInt(percentagetip.value);

        let billcalc = (tipbill / 100) * billvalue;
        tipamountcal.value = billcalc;
        totalbill.value = billvalue + billcalc;


    }


}