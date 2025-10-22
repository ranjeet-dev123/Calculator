const display = document.getElementById("display");

function press(val) {
  if(display.value === "0" || display.value.includes("Can't") || display.value === "Invalid") display.value = "";
  display.value += val;
}

function clearDisplay() { display.value = ""; }

function calculate() {
  try {
    if(display.value.includes('/0')){
      display.value = "Can't divide by 0";
    } else {
      let result = eval(display.value);
      if(isNaN(result) || !isFinite(result)) display.value = "Invalid";
      else display.value = result.toString().replace(/^0+(?=\d)/,'');
    }
  } catch { display.value = "Invalid"; }
}

function sqrt() { mathFunc(Math.sqrt); }
function square() { mathFunc(x=>x*x); }
function percent() { mathFunc(x=>x/100); }
function sine() { mathFunc(x=>Math.sin(x*Math.PI/180)); }
function cosine() { mathFunc(x=>Math.cos(x*Math.PI/180)); }
function tangent() { mathFunc(x=>Math.tan(x*Math.PI/180)); }
function log() { mathFunc(Math.log10); }
function ln() { mathFunc(Math.log); }
function insertPi() { display.value += Math.PI.toFixed(8); }
function insertE() { display.value += Math.E.toFixed(8); }

function mathFunc(fn){
  try {
    let num = parseFloat(display.value);
    if(isNaN(num)) display.value="Invalid";
    else display.value = fn(num).toFixed(6).replace(/^0+(?=\d)/,'');
  } catch { display.value="Invalid"; }
}
