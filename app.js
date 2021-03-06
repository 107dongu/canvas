const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const	colors = document.getElementsByClassName("controls__color");
// console.log(Array.from(colors));

// pixcel modifier에 사이즈 지정
canvas.width = 700;
canvas.height = 700;

// context 안에 있는 색과 크기 지정
ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
	painting = false;	
}

function startPainting() {
	painting = true;
}

function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	if (!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

function onMouseDown(event) {
	startPainting();
}

function onMouseUp(event) {
	stopPainting();
}

function onMouseLeave(event) {
	stopPainting();
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", onMouseDown);
	canvas.addEventListener("mouseup", onMouseUp);
	canvas.addEventListener("mouseleave", onMouseLeave);
}

function handleColorClick(event) {
	// console.log(event.target.style.backgroundColor);
	ctx.strokeStyle = event.target.style.backgroundColor;
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));