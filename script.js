let container = document.querySelector("#container")

for (let i=0; i<16; ++i) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j=0; j<16; ++j) {
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        row.appendChild(div);
    }
    container.appendChild(row);
}

allCells = document.querySelectorAll(".cell");

allCells.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add("visited");
    })
})