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
            createRow.setAttribute("draggable", false);
            createRow.style.backgroundColor = "#DEF2F1";
            activateBlock(createRow);
            createColumn.appendChild(createRow);}
    }
}

function activateBlock(block){

        block.addEventListener("mousedown", function(){
            if (colorSelected != ""){
                switch (colorSelected){
                    case "black":
                        block.style.backgroundColor = "black"; 
                        break;
                    case "rgb":
                        block.style.backgroundColor = randomColor(); 
                        break;
                    // case "fade":
                    //     block.style.backgroundColor = fadeColor(); 
                    //     break;  
                    case "erase":
                        block.style.backgroundColor = "rgb(222, 242, 241)"; 
                        break;
                }
            }
        });
        block.addEventListener("mouseover", function(){
            if (mouseDown == 1){
                switch (colorSelected){
                    case "black":
                        block.style.backgroundColor = "black"; 
                        break;
                    case "rgb":
                        block.style.backgroundColor = randomColor(); 
                        break;
                    // case "fade":
                    //     block.style.backgroundColor = fadeColor(); 
                    //     break;  
                    case "erase":
                        block.style.backgroundColor = "rgb(222, 242, 241)"; 
                        break;
                }
            }
        });
}

function changeColor(color){
    if (color != ""){
        switch (color){
            case "black":
                block.style.backgroundColor = "black"; 
                break;
            case "rgb":
                block.style.backgroundColor = randomColor(); 
                break;
            // case "fade":
            //     block.style.backgroundColor = fadeColor(); 
            //     break;  
            case "erase":
                block.style.backgroundColor = "rgb(222, 242, 241)"; 
                break;
        }
    }

}

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb("+ r + "," + g + "," + b + ")";
}