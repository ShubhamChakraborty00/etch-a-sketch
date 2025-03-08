let container = document.querySelector("#container")
let num = 16;

function createBox (num) {
    for (let i=0; i<num; ++i) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j=0; j<num; ++j) {
            let div = document.createElement("div");
            div.setAttribute("class", "cell");
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    
    allCells = document.querySelectorAll(".cell");


    
    allCells.forEach((item) => {
        item.addEventListener('mouseover', () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);

            let opacity = item.style.opacity;
            console.log("opacity: " + opacity);

            item.style.backgroundColor = "rgb(" +red+ ", " +green+ "," +blue+ ")";
            if (!opacity) {
                item.style.opacity = 1;
            }
            else if (opacity > 0){
                item.style.opacity = opacity - 0.1;
            }
            else {
                item.style.opacity = 0;
            }
        })
    })
}

createBox(16);

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    num = prompt("Enter no. of squares per unit x. Box size: x*x. Min = 1, Max = 100");
    
    if (num > 100) {
        num = 100;
    }
    else if (num < 1) {
        num = 1;
    }
    
    container.textContent = "";

    createBox(num);
})