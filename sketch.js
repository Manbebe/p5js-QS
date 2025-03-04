let xSlider;
let ySlider;
let zSlider;


function setup(){
    createCanvas(1600, 900, WEBGL);
    xSlider = createSlider(-400, 400, 400);
    xSlider.position(750, 850);
    xSlider.size(100);
    ySlider = createSlider(-400, 400, -200);
    ySlider.position(750, 870);
    ySlider.size(100);
    zSlider = createSlider(0, 1600, 800);
    zSlider.position(750, 890);
    zSlider.size(100);
  
}

function draw(){
    background(255, 0 , 200);
    let x = xSlider.value();
    let y = ySlider.value();
    let z = zSlider.value();
  
    // Move the camera.
    camera(x, y, z);
  // Rotate around the y-axis.

  // Draw a line.
  line(0, 0, 0, 480, 0, -10);

  // Draw the center sphere.
  torus(75,50);

  // Translate to the second point.
  translate(500, 0, -10);

  // Draw the bottom-right sphere.
  torus(75,50,);
}