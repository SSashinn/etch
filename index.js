const mainBox = document.querySelector('.main-box');
let size = 16;
grids(size);
const button = document.querySelector('#button').onclick = sizes;
const paint = document.querySelector('#paint').onclick = paints;



function sizes(){
    while (true){
        size = prompt("NO OF GRIDS");
        if (size.length==0){
            alert("Type some value.")}
        else if (size>100 || size<1){
            alert("Number of grids should not be greater than 100 and it should not be negative.")}
        else{
            document.querySelector('.main-box').textContent = '';
            grids(size);
            return 1;
        }
    }
}


function grids(size){
    for (let j=0;j<size;j++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        mainBox.appendChild(gridColumn)
        for (let i = 0;i<size; i++){
    
            const grid = document.createElement('div')
            grid.classList.add('grid')
            gridColumn.appendChild(grid);
        } 
    }
}

function paints(){
    let hover = document.getElementsByClassName("grid");
    let size = hover.length;
    for (let i=0; i<size;i++){
        hover[i].onmouseover = () => {
            hover[i].classList.add('gridHover');
        };
    };    
};