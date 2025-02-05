function calculateHeight() {
    const fatherHeight = parseFloat(document.getElementById("father-height").value);
    const motherHeight = parseFloat(document.getElementById("mother-height").value);
    const childGender = document.getElementById("child-gender").value;
    let result;

    if (childGender === "boy") {
        result = (fatherHeight + motherHeight + 13) / 2;
    } else {
        result = (fatherHeight + motherHeight - 13) / 2;
    }

    const minRange = result - 6.5;
    const maxRange = result + 6.5;

    document.getElementById("result").textContent = result.toFixed(1);
    document.getElementById("min-range").textContent = minRange.toFixed(1);
    document.getElementById("max-range").textContent = maxRange.toFixed(1);
}