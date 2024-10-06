// Select all elements 
const total_Bill=document.getElementById("Bill-check");
const guest_number=document.getElementById("people-number")
const tip_Buttons=document.querySelectorAll(".BtnTip")
const tipAmount=document.getElementById("Tip-person")
const personTotal=document.getElementById("person-total")
const Reset=document.getElementById("reset-Bill")

// variables to hold the inputs value
let Bill,total_guest,selected_Tip


// Capture Bill dynamic
total_Bill.addEventListener("input", function(e) {
    if (e.target.value === 0 || e.target.value==="") {
        total_Bill.classList.add("unvalid"); 
    } else {
        Bill = Math.abs(e.target.value);
        calculateAmounts();
        total_Bill.classList.remove("unvalid"); 
    }
});

// Capture guest number 
guest_number.addEventListener("input",function(e)
{
    total_guest=Math.abs(e.target.value)
    calculateAmounts()
})

// Captrue the tip percentage
tip_Buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Remove 'selected' class from all buttons first
        tip_Buttons.forEach(btn => btn.classList.remove("selected"));

        // Add 'selected' class to the clicked button
        this.classList.add("selected");

        // Set the selected tip and calculate amounts
        selected_Tip = parseInt(this.textContent);
        calculateAmounts();
    });
});


function calculateAmounts() {
    if (Bill && selected_Tip && total_guest) {
        const tip_per_person = (Bill * selected_Tip / 100) / total_guest;
        tipAmount.textContent = "$" + tip_per_person.toFixed(2);

        const total_per_person = (Bill / total_guest) + tip_per_person;
        personTotal.textContent = "$" + total_per_person.toFixed(2);
    } else {
        tipAmount.textContent = "$0";
        personTotal.textContent = "$0";
    }
}
// Reset all calaulated values
Reset.addEventListener("click", function() {
    tipAmount.textContent = "$0";
    personTotal.textContent = "$0";
    
    total_Bill.value = "";
    guest_number.value = "";
    
    tip_Buttons.forEach(button => {
        button.classList.remove("selected");
    });
    selected_Tip = 0;
});
