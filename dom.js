    function calculateEMI() {
        let principal = parseFloat(document.getElementById("loanAmount").value);
        let annualRate = parseFloat(document.getElementById("interestRate").value);
        let years = parseFloat(document.getElementById("loanTenure").value);

        if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }

        let monthlyRate = annualRate / 12 / 100;
        let months = years * 12;

        let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                  (Math.pow(1 + monthlyRate, months) - 1);

        document.getElementById("output").innerText =
            "Your Monthly EMI is ₹" + emi.toFixed(2);
    }
     