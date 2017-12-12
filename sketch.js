
var medium = 300;
var aTheta, bTheta;
var cnv;
var aSlider, bSlider;
var n1, n2;



function setup() {
  cnv = createCanvas(640, 480);

  aSlider = createSlider(1, 5, 1);
  aSlider.class("sim-slider");
  aSlider.position(width - 150, 10);

  bSlider = createSlider(1, 5, 2);
  bSlider.position(width - 150, height - 80);
  bSlider.class("sim-slider red");
}


function draw() {
  background(175);
  fill(255);
  rect(((width / 2) - medium / 2), 0, medium, height);
	n1 = aSlider.value();
	n2 = bSlider.value();

  var a = mouseY - height / 2;
  var b = width/2 - medium / 2 - mouseX;
  aTheta = atan(a / b);
  var offset = tan(aTheta) * ((width / 2 - medium / 2) - 50);

  bTheta = asin(n1 * sin(aTheta) / n2);
	var roffset = tan(bTheta) * medium;

  stroke(0,0,255);
	if (mouseX < width / 2 - medium / 2) {
		line(mouseX, mouseY, width / 2 - medium / 2, height / 2);

		line(width / 2 - medium / 2, height / 2, width / 2 + medium / 2, height / 2 - roffset);
  	line(width / 2 + medium / 2, height / 2 - roffset, width - 50, height / 2 - offset - roffset);
	}

	stroke(0);
	line(0, height / 2, width / 2 + medium / 2, height / 2);


  textSize(24);
  fill(0);
  text("Snell's Law", width / 2 - 65, 20);

  noStroke();
  text('n1', 100, height - 20);
  text('n2', 200, height - 20);

	textSize(10);
	text('Incident Angle =', 10, 30);
	text(Math.round(aTheta * 180 / PI), 85, 30);
	text('degrees', 100, 30);

	text('Refracted Angle =', 10, 50);
	text(Math.round(bTheta * 180 / PI), 93, 50);
	text('degrees', 109, 50);
  
  textSize(14);
  text('n1 =',width - 110, 15);
  text(n1, width - 75, 15);
  text('n2 =',width - 110, height - 80);
  text(n2, width - 75, height - 80);
}
