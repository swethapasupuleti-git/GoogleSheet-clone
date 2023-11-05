let columns = 26;
let rows = 100;
const headerContainer = document.querySelector(".header");
const numberContainer = document.querySelector(".numb-col");
const mainContainer = document.querySelector(".main");
function createHeaderCells(){
    for(let i=0; i<=columns; i++){
        const headerCells = document.createElement("div");
        headerCells.className = "header-cells";
        if(i !== 0){
            headerCells.innerText = String.fromCharCode(64 + i);
        }
        headerContainer.appendChild(headerCells);
    }  
}
function createNumberCells(){

    for(let i=1; i<= rows; i++){
        const numberCells = document.createElement("div");
        numberCells.className = "numb-cells";
        numberCells.innerText = i;
        numberContainer.appendChild(numberCells);
    }
}
function createRow(rowNumber){
    const row = document.createElement("div");
    row.className = "row";
    for(let i=1; i<=columns; i++){
       const rowCells= document.createElement("div");
       rowCells.className = "main-cell";
       rowCells.contentEditable = true;
       row.appendChild(rowCells);

       rowCells.id = String.fromCharCode(64 + i)+ rowNumber;

       rowCells.addEventListener("focus", onCellFocus)
    }
    mainContainer.appendChild(row);
}
function buildMainContainer(){
    for(let i= 1; i<=rows; i++){
        createRow(i);
    }
}
createHeaderCells();
createNumberCells();
// createRow();
buildMainContainer();