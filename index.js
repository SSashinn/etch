const mainBox = document.querySelector('.main-box');
let size;
while (true){
    size = prompt("NO OF GRIDS");
    if (size>100 && size<0){
        alert("No of grids should be less than 100.");}
    else{
        break;
    }
}


for (let j=0;j<size;j++){
    const gridColumn = document.createElement('div');
    gridColumn.classList.add('grid-column');
    mainBox.appendChild(gridColumn)
    for (let i = 0;i<size; i++){

        const grid = document.createElement('div');
        grid.classList.add('grid')
        gridColumn.appendChild(grid);
    }
    
}

