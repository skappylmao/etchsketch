function makeGrid(length) {
    for (let i = 0; i < length; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        for (let j = 0;j < length;j++) {
            let cell = document.createElement("div");
            
            cell.style.width = "16px";
            cell.style.height = "16px";
            cell.style.borderStyle="solid";
            cell.onmouseover = function() {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                this.style.backgroundColor = "#" + randomColor;
            }
            row.appendChild(cell);
        }
        document.getElementById("container").appendChild(row);
    }
}

let genBtn = document.getElementById("gridGen");
genBtn.onclick = function() {
    let size = parseInt(document.getElementById("sizeInput").value);
    if (size > 0 && size <= 100) {
        document.getElementById("container").innerHTML = "";
        makeGrid(size);
    }else{
        alert("Invalid value! Size must be under 100");
    }
}

makeGrid(16);