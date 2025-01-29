function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    
    if (birthdate === "") {
        document.getElementById("result").innerText = "Please enter a valid birthdate!";
        return;
    }

    let birthDateObj = new Date(birthdate);
    let today = new Date();

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    // Adjust for negative days (when the birth date is ahead in the month)
    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // Adjust for negative months (when the birth month is ahead in the year)
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}