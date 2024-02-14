// global function
// get input value through id
function getInputValueById(id) {
  const inputId = document.getElementById(id);
  const value = parseFloat(inputId.value);
  return value;
}
// set text in html element
function setText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// calculateTriangle
function calculateTriangle() {
  const b = document.getElementById("triangle-input-first");
  const h = document.getElementById("triangle-input-second");
  const show = document.getElementById("triangle-result");
  // get bhumi
  const bvalue = parseFloat(b.value);
  // get height
  const hvalue = parseFloat(h.value);
  // result calculation
  const result = 0.5 * bvalue * hvalue;
  // return result;
  show.innerText = result;
  const div = document.getElementById("publish");
  const p = document.createElement("p");
  p.innerText = `Triangle-result: ${result}`;
  div.appendChild(p);
}

// calculateRectangle
function calculateRectangle() {
  const width = getInputValueById("rectangle-input-first");
  // console.log(width)
  const length = getInputValueById("rectangle-input-second");
  // console.log(length)
  const area = width * length;
  const show = setText("rectangle-result", area);
  const div = document.getElementById("publish");
  const p = document.createElement("p");
  p.innerText = `Rectangle-result: ${area}`;
  div.appendChild(p);
  return show;
}

// calculateParallelogram
function calculateParallelogram() {
  const base = getInputValueById("parallelogram-input-first");
  const height = getInputValueById("parallelogram-input-second");
  const area = base * height;
  const show = setText("parallelogram-result", area);
  const div = document.getElementById("publish");
  const p = document.createElement("p");
  p.innerText = `Parallelogram-result: ${area}`;
  div.appendChild(p);
  return show;
}

// calculateRhombus
function calculateRhombus() {
  const d1 = getInputValueById("rhombus-input-first");
  const d2 = getInputValueById("rhombus-input-second");
  const area = 0.5 * d1 * d2;
  const show = setText("rhombus-result", area);
  const div = document.getElementById("publish");
  const p = document.createElement("p");
  p.innerText = `Rhombus-result: ${area}`;
  div.appendChild(p);
  return show;
}

function calculatePentagon() {
  const p = getInputValueById("pentagon-input-first");
  const b = getInputValueById("pentagon-input-second");
  const area = 0.5 * p * b;
  const show = setText("pentagon-result", area);
  const div = document.getElementById("publish");
  const pentagon = document.createElement("p");
  pentagon.innerText = `Pentagon-result: ${area}`;
  div.appendChild(pentagon);
  return show;
}

// calculateEllipse
function calculateEllipse() {
  const pi = Math.PI;
  const a = getInputValueById("ellipse-input-first");
  const b = getInputValueById("ellipse-input-second");
  const area = pi * a * b;
  const twoDigit = parseFloat(area.toFixed(2));
  const show = setText("ellipse-result", twoDigit);
  const div = document.getElementById("publish");
  const p = document.createElement("p");
  p.innerText = `Ellipse-result: ${twoDigit}`;
  div.appendChild(p);
  return show;
}
