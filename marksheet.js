
    let grandTotal = 0;
    const maxMarks = 700; // Total maximum marks for all subjects
    const subjectCount = 7; // Total number of subjects

    for (let i = 1; i <= subjectCount; i++) {
        let theory = parseInt(document.getElementById(`theory${i}`).value) || 0;
        let practical = parseInt(document.getElementById(`practical${i}`).value) || 0;
        let total = theory + practical;

        document.getElementById(`total${i}`).textContent = total;
        document.getElementById(`words${i}`).textContent = numberToWords(total);

        grandTotal += total;
    }

    document.getElementById('grandTotal').textContent = grandTotal;
    let percentage = (grandTotal / maxMarks) * 100;
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
    document.getElementById('result').textContent = percentage >= 40 ? 'PASS' : 'FAIL';


function numberToWords(number) {
    // Convert numbers to words for 0-100 range. Adjust as needed.
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
                   "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];
    if (number <= 20) {
        return words[number];
    } else if (number < 100) {
        let tens = Math.floor(number / 10);
        let units = number % 10;
        let tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        return tensWords[tens] + (units > 0 ? " " + words[units] : "");
    } else {
        return "One Hundred"; // This assumes maximum marks per subject is 100
    }
}

window.onload = function() {
    // Set the date to today's date
    document.getElementById('date').textContent = new Date().toLocaleDateString();
};

