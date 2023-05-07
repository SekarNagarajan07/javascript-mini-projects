const tilesContainer = document.querySelector(".tiles");
const color = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorPicklist = [...color, ...color];
const tileCount = colorPicklist.length;

//Game state

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed")
        if (awaitingEndOfMove || revealed === "true" || element == activeTile) {
            return;
        }
        element.style.backgroundColor = color;

        if (!activeTile) {
            activeTile = element;
            return;
        }

        const colorToMatch = activeTile.getAttribute("data-color");
        if (colorToMatch === color) {
            activeTile.setAttribute("data-revealed", "true");
            element.setAttribute("data-revealed", "true");
            activeTile = null;
            awaitingEndOfMove = false;
            revealedCount += 2;
            if (revealedCount === tileCount) {
                alert("You Win! Refresh to play again.")
            }
            return;
        }

        //down here

        awaitingEndOfMove = true;

        setTimeout(() => {
            activeTile.style.backgroundColor = null;
            element.style.backgroundColor = null;
            awaitingEndOfMove = false;
            activeTile = null;
        }, 1000);

    });

    return element;
}

//Build up tiles
for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorPicklist.length)
    const color = colorPicklist[randomIndex];
    const tile = buildTile(color);
    colorPicklist.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);
}