const activeCellElement = document.querySelector(".active-cell");
const fontsizeInput = document.querySelector("#fontsize");
const fontfamilyInput = document.querySelector("#fontfamily");
const form = document.querySelector("#form");

let activeElement = null;
const state = {};
const defaultProperties = {
    fontfamily: 'sans',
    fontSize: 16,
    textAllign: "left",
    color: "#000",
    backgroundcolor: "#fff",
    isBold: false,
    isItalic: false,
    isUnderline: false,
}
function onCellFocus(event){
    const elementId = event.target.id;
    activeCellElement.innerText = elementId;
    //console.log(event.target.id)
    activeElement = event.target;
    if(state[elementId]){
        resetOptions(state[elementId]);
    }
    else{
        resetOptions(defaultProperties); 
    }
}
function resetOptions(optionsState){

    fontsizeInput.value = optionsState.fontSize;
    fontfamilyInput.value = optionsState.fontfamily;
}
