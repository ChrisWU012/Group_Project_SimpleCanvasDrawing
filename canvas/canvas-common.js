let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let colorPicked;
let userInputSize = 6;

$("#stroke-size").on('change',function(e) {
  userInputSize = e.target.value
});

$("#color-picker").on('change',function(e) {
  // userInputSize = e.target.value
  colorPicked = e.target.value
  console.log("colorPicked : " + colorPicked);
});

$('#clear').click(function() {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
});

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  if(currentFunction) {
    currentFunction.onMouseMove([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if(currentFunction) {
    currentFunction.onMouseUp([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (currentFunction) {
    currentFunction.onMouseLeave([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (currentFunction) {
    currentFunction.onMouseEnter([mouseX, mouseY], e);
  }
});

function activeColor() {
  return $("#color-picker").val()
}

class PaintFunction {
  constructor() {
    this.color = colorPicked
  }
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
