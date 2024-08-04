console.log("play tic tac toe game")
const box = document.querySelectorAll("button")
let currentsvg;
let currentbox;
// currentbox.remove()
// console.log(box)
box.forEach(element => {
    element.addEventListener("click", ()=>{
        console.log(element)
        svgs(element)
    })
});

function svgs(element) {
    console.log(currentsvg)
        if (currentbox != undefined) {
            currentbox.removeEventListener("click",svgs)
            console.log(currentbox)
        }
    switch (currentsvg) {
        case currentsvg === undefined:
            element.firstElementChild.src = "assets/cross.svg"
            element.firstElementChild.alt = "svg-image"
            currentsvg = "assets/cross.svg"
            element.removeEventListener("click", () => { })
            currentbox = element;
            break;
        case currentsvg = "assets/cross.svg":
            element.firstElementChild.src = "assets/circle.svg"
            element.firstElementChild.alt = "svg-image"
            currentsvg = "assets/circle.svg"
            element.removeEventListener("click", () => { })
            currentbox = element;
            break;
        case currentsvg = "assets/circle.svg":
            element.firstElementChild.src = "assets/cross.svg"
            element.firstElementChild.alt = "svg-image"
            currentsvg = "assets/cross.svg"
            element.removeEventListener("click", () => { })
            currentbox = element;
            break;
        default:
            element.firstElementChild.src = "assets/cross.svg"
            element.firstElementChild.alt = "svg-image"
            currentsvg = "assets/cross.svg"
            element.removeEventListener("click", () => { })
            currentbox = element;
            break;
    }
}