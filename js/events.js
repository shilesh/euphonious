// Generate options for dropdown with letters A-Z
const alphabetDropdown = document.getElementById("alphabetDropdown");
for (let i = 65; i <= 90; i++) {
    const option = document.createElement("option");
    option.value = String.fromCharCode(i);
    option.text = String.fromCharCode(i);
    alphabetDropdown.appendChild(option);
}

// Function to allow only one checkbox selection
function selectOnlyOne(checkbox) {
    const checkboxes = document.querySelectorAll("input[name='option']");
    checkboxes.forEach((box) => {
        if (box !== checkbox) box.checked = false;
    });
    alert(`You selected: ${checkbox.value}`);
}

// Function to display input text in the result div
function displayResult() {
    const inputText = document.getElementById("inputText").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = `You entered: ${inputText}`;
}
