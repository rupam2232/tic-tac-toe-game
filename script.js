console.log("play tic tac toe game")
const box = document.querySelectorAll("button")
const backgroundchange = document.querySelector(".backgroundchange")
const game = document.querySelector(".game")
const result = document.querySelector(".result")
const cross = document.querySelector(".cross")
const circle = document.querySelector(".circle")
setTimeout(() => {
    backgroundchange.style.height = "15.3rem"
    backgroundchange.style.width = "15.3rem"
    backgroundchange.style.opacity = "1"

}, 100)
let currentsvg;
if(currentsvg === undefined){
    circle.classList.remove("box-shadow")
    cross.classList.add("box-shadow")
}

function svgs(element) {
    switch (currentsvg) {
        case currentsvg === undefined:
            element.firstElementChild.src = "assets/cross.svg"
            element.firstElementChild.alt = "svg-image"
            currentsvg = "assets/cross.svg"
            break;
        case currentsvg = "assets/cross.svg":
            element.firstElementChild.src = "assets/circle.svg"
            element.firstElementChild.alt = "svg-image"
            currentsvg = "assets/circle.svg"
            break;
        case currentsvg = "assets/circle.svg":
            element.firstElementChild.src = "assets/cross.svg"
            element.firstElementChild.alt = "svg-image"
            currentsvg = "assets/cross.svg"
            break;
        default:
            element.firstElementChild.src = "assets/cross.svg"
            element.firstElementChild.alt = "svg-image"
            currentsvg = "assets/cross.svg"
            break;
    }
}

function winnerchecker() {
    if (box[0].children[0].src.includes("assets/cross.svg") && box[1].children[0].src.includes("assets/cross.svg") && box[2].children[0].src.includes("assets/cross.svg")) {
        box[0].style.backgroundColor = "green"
        box[1].style.backgroundColor = "green"
        box[2].style.backgroundColor = "green"
        forcross()
    }
    else if (box[0].children[0].src.includes("assets/circle.svg") && box[1].children[0].src.includes("assets/circle.svg") && box[2].children[0].src.includes("assets/circle.svg")) {
        box[0].style.backgroundColor = "green"
        box[1].style.backgroundColor = "green"
        box[2].style.backgroundColor = "green"
        forcircle()
    }
    else if (box[3].children[0].src.includes("assets/cross.svg") && box[4].children[0].src.includes("assets/cross.svg") && box[5].children[0].src.includes("assets/cross.svg")) {
        box[3].style.backgroundColor = "green"
        box[4].style.backgroundColor = "green"
        box[5].style.backgroundColor = "green"
        forcross()
    }
    else if (box[3].children[0].src.includes("assets/circle.svg") && box[4].children[0].src.includes("assets/circle.svg") && box[5].children[0].src.includes("assets/circle.svg")) {
        box[3].style.backgroundColor = "green"
        box[4].style.backgroundColor = "green"
        box[5].style.backgroundColor = "green"
        forcircle()
    }
    else if (box[6].children[0].src.includes("assets/cross.svg") && box[7].children[0].src.includes("assets/cross.svg") && box[8].children[0].src.includes("assets/cross.svg")) {
        box[6].style.backgroundColor = "green"
        box[7].style.backgroundColor = "green"
        box[8].style.backgroundColor = "green"
        forcross()
    }
    else if (box[6].children[0].src.includes("assets/circle.svg") && box[7].children[0].src.includes("assets/circle.svg") && box[8].children[0].src.includes("assets/circle.svg")) {
        box[6].style.backgroundColor = "green"
        box[7].style.backgroundColor = "green"
        box[8].style.backgroundColor = "green"
        forcircle()
    }
    else if (box[0].children[0].src.includes("assets/cross.svg") && box[3].children[0].src.includes("assets/cross.svg") && box[6].children[0].src.includes("assets/cross.svg")) {
        box[0].style.backgroundColor = "green"
        box[3].style.backgroundColor = "green"
        box[6].style.backgroundColor = "green"
        forcross()
    }
    else if (box[0].children[0].src.includes("assets/circle.svg") && box[3].children[0].src.includes("assets/circle.svg") && box[6].children[0].src.includes("assets/circle.svg")) {
        box[0].style.backgroundColor = "green"
        box[3].style.backgroundColor = "green"
        box[6].style.backgroundColor = "green"
        forcircle()
    }
    else if (box[1].children[0].src.includes("assets/cross.svg") && box[4].children[0].src.includes("assets/cross.svg") && box[7].children[0].src.includes("assets/cross.svg")) {
        box[1].style.backgroundColor = "green"
        box[4].style.backgroundColor = "green"
        box[7].style.backgroundColor = "green"
        forcross()
    }
    else if (box[1].children[0].src.includes("assets/circle.svg") && box[4].children[0].src.includes("assets/circle.svg") && box[7].children[0].src.includes("assets/circle.svg")) {
        box[1].style.backgroundColor = "green"
        box[4].style.backgroundColor = "green"
        box[7].style.backgroundColor = "green"
        forcircle()
    }
    else if (box[2].children[0].src.includes("assets/cross.svg") && box[5].children[0].src.includes("assets/cross.svg") && box[8].children[0].src.includes("assets/cross.svg")) {
        box[2].style.backgroundColor = "green"
        box[5].style.backgroundColor = "green"
        box[8].style.backgroundColor = "green"
        forcross()
    }
    else if (box[2].children[0].src.includes("assets/circle.svg") && box[5].children[0].src.includes("assets/circle.svg") && box[8].children[0].src.includes("assets/circle.svg")) {
        box[2].style.backgroundColor = "green"
        box[5].style.backgroundColor = "green"
        box[8].style.backgroundColor = "green"
        forcircle()
    }
    else if (box[0].children[0].src.includes("assets/cross.svg") && box[4].children[0].src.includes("assets/cross.svg") && box[8].children[0].src.includes("assets/cross.svg")) {
        box[0].style.backgroundColor = "green"
        box[4].style.backgroundColor = "green"
        box[8].style.backgroundColor = "green"
        forcross()
    }
    else if (box[0].children[0].src.includes("assets/circle.svg") && box[4].children[0].src.includes("assets/circle.svg") && box[8].children[0].src.includes("assets/circle.svg")) {
        box[0].style.backgroundColor = "green"
        box[4].style.backgroundColor = "green"
        box[8].style.backgroundColor = "green"
        forcircle()
    }
    else if (box[2].children[0].src.includes("assets/cross.svg") && box[4].children[0].src.includes("assets/cross.svg") && box[6].children[0].src.includes("assets/cross.svg")) {
        box[2].style.backgroundColor = "green"
        box[4].style.backgroundColor = "green"
        box[6].style.backgroundColor = "green"
        forcross()
    }
    else if (box[2].children[0].src.includes("assets/circle.svg") && box[4].children[0].src.includes("assets/circle.svg") && box[6].children[0].src.includes("assets/circle.svg")) {
        box[2].style.backgroundColor = "green"
        box[4].style.backgroundColor = "green"
        box[6].style.backgroundColor = "green"
        forcircle()
    }
    else {
        let allHaveSvg = Array.from(box).every(element => {
            let firstChild = element.children[0];
            return firstChild && firstChild.src && firstChild.src.includes(".svg");
        });
        if (allHaveSvg) {
            tie();
        }
    }
}

function forcross() {
    console.log("cross")
    game.style.filter = "blur(2px)"
    result.style.opacity = "1"
    result.style.height = "15.3rem"
    result.style.width = "15.3rem"
    setTimeout(() => {
        result.firstChild.children[0].style.width = "8rem"
    }, 200);
    setTimeout(() => {
        result.lastElementChild.style.transform = "translateY(0)"
    }, 500);
    result.innerHTML = `<div class="resultimg">
    <img src="assets/cross.svg" alt="result-img">
                </div>
                <p>WINNER</p>`
}
function forcircle() {
    console.log("circle")
    game.style.filter = "blur(2px)"
    result.style.opacity = "1"
    result.style.height = "15.3rem"
    result.style.width = "15.3rem"
    setTimeout(() => {
        result.firstChild.children[0].style.width = "6.5rem"
    }, 100);
    setTimeout(() => {
        result.lastElementChild.style.transform = "translateY(0)"
    }, 500);
    result.innerHTML = `<div class="resultimg">
                    <img src="assets/circle.svg" alt="result-img">
                </div>
                <p>WINNER</p>`
}
function tie() {
    console.log("tie")
    game.style.filter = "blur(2px)"
    result.style.opacity = "1"
    result.style.height = "15.3rem"
    result.style.width = "15.3rem"
    setTimeout(() => {
        result.firstChild.children[0].style.width = "8rem"
        result.firstChild.children[1].style.width = "6.5rem"
    }, 100);
    setTimeout(() => {
        result.lastElementChild.style.transform = "translateY(0)"
    }, 500);
    result.innerHTML = `<div class="resultimg">
    <img src="assets/cross.svg" alt="result-img">
                    <img src="assets/circle.svg" alt="result-img">
                </div>
                <p>DRAW</p>`

}

box.forEach(element => {
    element.addEventListener("click", function handler() {
        svgs(element)
        if(currentsvg === "assets/cross.svg"){
            cross.classList.remove("box-shadow")
            circle.classList.add("box-shadow")
        }
        if(currentsvg === "assets/circle.svg"){
            circle.classList.remove("box-shadow")
            cross.classList.add("box-shadow")
        }
        element.removeEventListener("click", handler)
        winnerchecker()
    })
});


