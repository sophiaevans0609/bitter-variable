var p;
function setup() {
  createCanvas(0, 0); //we aren't using the p5.js canvas, we're using js to create and then manipulate HTML and CSS
  p =('Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula natoque integer quam lacus blandit duis adipiscing tempus consequat. Auctor dui posuere facilisi blandit, netus euismod? Rutrum nibh elit amet consectetur parturient quam maecenas. Ex magnis vel sem ante nascetur dictumst porta. Morbi dis velit nostra; ex aliquet inceptos. Lorem ipsum odor amet. ue, phasellus taciti vita'); // create a <p> element in the HTML DOM that contains the listed text.
}

function draw() {

  let w = map(mouseX, 0, windowWidth, 100, 1000); // When the mouseX is 0, the font width is 100. When the mouseX is the windowWidth, the font width is 1000.

  let h = windowWidth / 10.5; // makes the text fit container responsively

  lineH = 1.25 // controls the line-height (leading) and can be adjusted to make that change based on different parameters

  // below, we use js to apply CSS styles. This lets the user interaction update the CSS 
  p.style('font-weight', w);
  p.style('font-size', h + 'px');
  p.style('line-height', lineH)
}

