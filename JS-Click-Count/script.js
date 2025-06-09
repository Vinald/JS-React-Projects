let heading = document.getElementById("heading");
const btnClear = document.getElementById("btnClear");

const squares = document.querySelectorAll(".buttons");

const timesClicked = { btnRed: 0, btnGreen: 0, btnYellow: 0 };

squares.forEach((square) => {
    square.addEventListener("click", () => {
        heading.innerHTML = square.value;
        timesClicked[square.id] += 1;
        square.innerHTML = timesClicked[square.id];
    });
});

btnClear.addEventListener("click", () => {
    heading.innerHTML = "Click a button!";
    squares.forEach((square) => {
        square.innerHTML = 0;
        timesClicked[square.id] = 0;
    });
});
