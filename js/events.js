//  import { NOTES } from './constants.js';
// Generate options for dropdown with letters A-Z

// import { ALPHABET_ARRAY } from './constants.js';
const NOTES = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
const MAJOR_INTERVALS = [2,2,1,2,2,2,1]
const MINOR_INTERVALS = [2,1,2,2,1,2,2]

// Populate the dropdown with the NOTES
const alphabetDropdown = document.getElementById("alphabetDropdown");
NOTES.forEach(letter => {
    const option = document.createElement("option");
    option.value = letter;
    option.text = letter;
    alphabetDropdown.appendChild(option);
});

// Function to handle dropdown change event and get selected radio button value
function handleDropdownChange() {
    const selectedDropdownValue = alphabetDropdown.value;
    const selectedRadio = document.querySelector("input[name='option']:checked");
    const selectedRadioValue = selectedRadio ? selectedRadio.value : "None";

    alert(`Selected Dropdown: ${selectedDropdownValue}, Selected Option: ${selectedRadioValue}`);
}

// Function to display input text in the result div
function displayResult() {
    const inputText = document.getElementById("notes_4_scale").value;
    const resultDiv = document.getElementById("result");
    //Convert coma separated values to array
    inputNotes = inputText.split(",").map(item => item.trim());
    scales = getMatchingScales(inputNotes);
    resultDiv.innerText = scales;
}

// Move to lib 
function getMatchingScales(notes){
    // Check if the scale of the note from notes has all other notes 
    let possibleScales = [];
    alert(notes);
    notes.forEach(_note => {
        scale = getMajorScaleFromRoot(_note);
        alert(scale);
        if(notes.every(value => scale.includes(value))){
            possibleScales.push(scale);
        }
    });
    alert(possibleScales);
    return possibleScales
};

function getMajorScaleFromRoot(root){
    return pickValuesWithJumps(root, NOTES, MAJOR_INTERVALS); 
};

function getMinorScaleFromRoot(root){
    return pickValuesWithJumps(root, NOTES, MINOR_INTERVALS); 
};

// const dataArray = ["A", "B", "C", "D", "E", "F", "G"];
// const jumpArray = [1, 2, 1, 3]; // These are the jump values
// const result = pickValuesWithJumps(dataArray, jumpArray);
// console.log(result); // Output: ["B", "D", "E", "G"]

function pickValuesWithJumps(root, dataArray, jumpArray) {
    const result = [];
    let currentIndex = dataArray.indexOf(root);

    jumpArray.forEach(jump => {
        if (currentIndex < dataArray.length) {
            result.push(dataArray[currentIndex]); // Add the value if within bounds
        }
        currentIndex += jump; // Move to the next index by the jump value
    });

    return result;
}
