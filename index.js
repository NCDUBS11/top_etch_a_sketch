//ELEMENTS
//buttons
const blackBtn = document.querySelector(".blackButton");
const fadeBtn = document.querySelector(".fadeButton");
const rgbBtn = document.querySelector(".rgbButton");
const eraseBtn = document.querySelector(".eraseButton");
const sizeBtn = document.querySelector(".sizeButton");
const resetBtn = document.querySelector(".resetButton");
//option menu
const confirmBtn = document.querySelector(".confirmButton");
const cancelBtn = document.querySelector(".cancelButton");
//grid
const gridArea = document.querySelector(".gridArea");
const createColumn = document.querySelectorAll(".createColumn");

//VARIABLES
let mouseDown = 0;
let tempGrid;    
let gridDim;
let colorSelected;

main();






function main() {

document.addEventListener("load", reset());

window.onmousedown = () => {
    mouseDown = 1;
}
window.onmouseup = () => {
    mouseDown = 0;
}

blackBtn.addEventListener("click",() => {
    colorSelected = "black";
})

fadeBtn.addEventListener("click",() => {
    colorSelected = "fade";
})

rgbBtn.addEventListener("click",() => {
    colorSelected = "rgb";
})

eraseBtn.addEventListener("click",() => {
    colorSelected = "erase";
})

sizeBtn.addEventListener("click",() => {
    if (document.querySelector(".sizeWindow").style.display = "none"){

        document.querySelector(".sizeWindow").style.display = "flex";

        const numInput = document.querySelector(".numInput");
        const numOutput = document.querySelector(".numOutput");
        const numOutput2 = document.querySelector(".numOutput2");
        numOutput.textContent = numInput.value;
        numOutput2.textContent = numInput.value;

        numInput.addEventListener("input", (event) => {
            numOutput.textContent = event.target.value;
            numOutput2.textContent = event.target.value;
            tempGrid = event.target.value;
        })

        confirmBtn.addEventListener("click",() => {
            gridDim = tempGrid; 
                
            gridArea.innerHTML = "";

            growGrid(gridDim);
                
            document.querySelector(".sizeWindow").style.display = "none";
                })
    }
    cancelBtn.addEventListener("click",() => {
        document.querySelector(".sizeWindow").style.display = "none";
    })
})

resetBtn.addEventListener("click",() => {
    reset();
})
}

function reset(){
    gridArea.innerHTML = "";
    gridDim = 25;
    colorSelected = "";
    growGrid(25);
}

function growGrid(value){
    for (i=0; i<value; i++){
        const createColumn = document.createElement("div");
        createColumn.setAttribute("class", "column");
        gridArea.appendChild(createColumn);

        for (j=0; j<value; j++){          
            const createRow = document.createElement("div");
            createRow.setAttribute("id", "block");
            createRow.setAttribute("class", "row");
            createRow.style.backgroundColor = "#DEF2F1";
            activateBlock(createRow);
            createColumn.appendChild(createRow);}
    }
}

function activateBlock(block){

        block.addEventListener("mouseover", () => {
            if (colorSelected != "" && mouseDown){
                switch (colorSelected){
                    case "black":
                        block.style.backgroundColor = "black"; 
                        break;
                    case "erase":
                        block.style.backgroundColor = "#DEF2F1"; 
                        break;
                }
            }
        })
        block.addEventListener("mousedown", () => {
            if (colorSelected != ""){
                switch (colorSelected){
                    case "black":
                        block.style.backgroundColor = "black"; 
                        break;
                    case "erase":
                        block.style.backgroundColor = "#DEF2F1"; 
                        break;
                }
            }
        })
}


// blockColumn.forEach(() => {
//     block.addEventListener("mouseover", () => {
//     if (colorSelected != ""){
//         switch (colorSelected){
//             case "black":
//                 block.style.backgroundColor = "black"; 
//                 break;
//             case "eraser":
//                 block.style.backgroundColor = "#DEF2F1"; 
//                 break;
//         }}})});



// blockRow.forEach(() => {
//     blockRow.addEventListener("mouseover", () => {
//     if (colorSelected != ""){
//         switch (colorSelected){
//             case "black":
//                 block.style.backgroundColor = "black"; 
//                 break;
//             case "eraser":
//                 block.style.backgroundColor = "#DEF2F1"; 
//                 break;
//         }}})});

// function hoverPaint(colorSelected){
//     addEventListener("mouseover", () => {
//         if (typeof colorSelected !== ""){
//             switch (colorSelected){
//                 case "black":
//                     block.style.backgroundColor = "black"; 
//                     break;
//                 case "eraser":
//                     block.style.backgroundColor = "#DEF2F1"; 
//                     break;
//                 case "fade":
//                     block.style.opacity = block.style.opacity + 0.1; 
//                     break;
    
// }}})}

