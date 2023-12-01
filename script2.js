const activeCellElement = document.querySelector(".active-cell");
const fontsizeInput = document.querySelector("#fontsize");
const fontfamilyInput = document.querySelector("#fontfamily");
const form = document.querySelector("#form");

let activeElement = null;
const state = {};
const defaultProperties = {
    fontFamily: 'sans',
    fontSize: 16,
    textAlign: "left",
    color: "#000000",
    backgroundColor: "#ffffff",
    isBold: false,
    isItalic: false,
    isUnderline: false,
    value: '',
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

    // fontsizeInput.value = optionsState.fontSize;
    // fontfamilyInput.value = optionsState.fontfamily;
    form.fontfamily.value = optionsState.fontFamily;
    form.fontsize.value = optionsState.fontSize;
    form.textalign.value = optionsState.textAlign;
    form.bold.checked = optionsState.isBold;
    form.italic.checked = optionsState.isItalic;
    form.underline.checked = optionsState.isUnderline;
    form.textcolor.value = optionsState.color;
    form.bgcolor.value = optionsState.backgroundColor;
    
    
}
function onformChange(){
    if(!activeElement){
        alert("please select a cell");
        form.reset();
        return;
    }
    let currentState = {
        fontFamily: form.fontfamily.value,
        fontSize: form.fontsize.value,
        textAlign: form.textalign.value,
        isBold: form.bold.checked,
        isItalic: form.italic.checked,
        isUnderline: form.underline.checked,
        color: form.textcolor.value,
        backgroundColor: form.bgcolor.value, 
    }
    applyStyleToCell(currentState);
    state[activeElement.id] = {...currentState, value: activeElement.innerText}
}
function applyStyleToCell(styleObject){
    activeElement.style.fontSize = `${styleObject.fontSize}px`;
    activeElement.style.fontFamily = styleObject.fontFamily;
    activeElement.style.color = styleObject.color;
    activeElement.style.backgroundColor = styleObject.backgroundColor;
    activeElement.style.textAlign = styleObject.textAlign;
    activeElement.style.fontWeight = styleObject.isBold? "bold" : "normal";
    activeElement.style.fontStyle = styleObject.isItalic? "italic" : "normal";
    activeElement.style.textDecoration = styleObject.isUnderline? "underline" : "none";
    
}
