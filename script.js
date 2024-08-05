console.log("play tic tac toe game")
const box = document.querySelectorAll("button")
const backgroundchange = document.querySelector(".backgroundchange")
const result = document.querySelector("result")
setTimeout(()=>{
    backgroundchange.style.height = "15.3rem"
    backgroundchange.style.width = "15.3rem"
    backgroundchange.style.opacity = "1"

},1000)
let currentsvg;

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
        forcross()
    }
    else if (box[0].children[0].src.includes("assets/circle.svg") && box[1].children[0].src.includes("assets/circle.svg") && box[2].children[0].src.includes("assets/circle.svg")) {
        forcircle()
    }
    else if (box[3].children[0].src.includes("assets/cross.svg") && box[4].children[0].src.includes("assets/cross.svg") && box[5].children[0].src.includes("assets/cross.svg")) {
        forcross()
    }
    else if (box[3].children[0].src.includes("assets/circle.svg") && box[4].children[0].src.includes("assets/circle.svg") && box[5].children[0].src.includes("assets/circle.svg")) {
        forcircle()
    }
    else if (box[6].children[0].src.includes("assets/cross.svg") && box[7].children[0].src.includes("assets/cross.svg") && box[8].children[0].src.includes("assets/cross.svg")) {
        forcross()
    }
    else if (box[6].children[0].src.includes("assets/circle.svg") && box[7].children[0].src.includes("assets/circle.svg") && box[8].children[0].src.includes("assets/circle.svg")) {
        forcircle()
    }
    else if (box[0].children[0].src.includes("assets/cross.svg") && box[3].children[0].src.includes("assets/cross.svg") && box[6].children[0].src.includes("assets/cross.svg")) {
        forcross()
    }
    else if (box[0].children[0].src.includes("assets/circle.svg") && box[3].children[0].src.includes("assets/circle.svg") && box[6].children[0].src.includes("assets/circle.svg")) {
        forcircle()
    }
    else if (box[1].children[0].src.includes("assets/cross.svg") && box[4].children[0].src.includes("assets/cross.svg") && box[7].children[0].src.includes("assets/cross.svg")) {
        forcross()
    }
    else if (box[1].children[0].src.includes("assets/circle.svg") && box[4].children[0].src.includes("assets/circle.svg") && box[7].children[0].src.includes("assets/circle.svg")) {
        forcircle()
    }
    else if (box[2].children[0].src.includes("assets/cross.svg") && box[5].children[0].src.includes("assets/cross.svg") && box[8].children[0].src.includes("assets/cross.svg")) {
        forcross()
    }
    else if (box[2].children[0].src.includes("assets/circle.svg") && box[5].children[0].src.includes("assets/circle.svg") && box[8].children[0].src.includes("assets/circle.svg")) {
        forcircle()
    }
    else if (box[0].children[0].src.includes("assets/cross.svg") && box[4].children[0].src.includes("assets/cross.svg") && box[8].children[0].src.includes("assets/cross.svg")) {
        forcross()
    }
    else if (box[0].children[0].src.includes("assets/circle.svg") && box[4].children[0].src.includes("assets/circle.svg") && box[8].children[0].src.includes("assets/circle.svg")) {
        forcircle()
    }
    else if (box[2].children[0].src.includes("assets/cross.svg") && box[4].children[0].src.includes("assets/cross.svg") && box[6].children[0].src.includes("assets/cross.svg")) {
        forcross()
    }
    else if (box[2].children[0].src.includes("assets/circle.svg") && box[4].children[0].src.includes("assets/circle.svg") && box[6].children[0].src.includes("assets/circle.svg")) {
        forcircle()
    }
    else{
        let allHaveSvg = Array.from(box).every(element => {
            let firstChild = element.children[0];
            return firstChild && firstChild.src && firstChild.src.includes(".svg");
        });
        if(allHaveSvg){
            tie();
        }
    }
}

function forcross() {
    console.log("cross")
    result.innerHTML
}
function forcircle() {
    console.log("circle")
}
function tie(){
    console.log("tie")
}

box.forEach(element => {
    // console.log(element)
    element.addEventListener("click", function handler() {
        svgs(element)
        element.removeEventListener("click", handler)
        winnerchecker()
        // console.log(box)
    })
});


