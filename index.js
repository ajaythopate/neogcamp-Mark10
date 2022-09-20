const billamount = document.querySelector('#bill-amount');
const checkbutton = document.querySelector('#check-button');
const cashgiven = document.querySelector('#cash-given');
const message = document.querySelector('#error-message');
const numberOfNotes = document.querySelectorAll('.no-of-notes');

const availebelNotes = [2000, 500, 100, 20, 10, 5, 1];

checkbutton.addEventListener("click", function validateBillAndCashAmount() {

    hidmessage();

    if (billamount.value > 0) {

        if (cashgiven.value >= billamount.value) {

            const amountToBeReturned = cashgiven.value - billamount.value
            calculateChange(amountToBeReturned);
        }
        else {
            Showmessage("Do you wnna wash plates");

        }
    }
    else {
        Showmessage("Invalid Bill Amount");
    }
})

function calculateChange(amountToBeReturned) {

    for (let i = 0; i < availebelNotes.length; i++) {

        const numberofNotes = Math.trunc(amountToBeReturned / availebelNotes[i]);

        amountToBeReturned = amountToBeReturned % availebelNotes[i];
        console.log(numberofNotes)
        numberOfNotes[i].innerText = numberofNotes;
    }
}

function hidmessage() {
    message.style.display = "none";
}

function Showmessage(msg) {
    message.style.display = "block";
    message.innerText = "msg";
}
