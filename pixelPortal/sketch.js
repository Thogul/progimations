let pixels = [];
function setup() {
  createCanvas(400, 400);
  console.log("generating elements");
  generate_elements(pixels, 100);
  console.log("done generating elements");
}

function draw() {
  background(220);
  for(let i=0;i<pixels.length;i++)
  {
    pixels[i].update();
    pixels[i].draw();
  }
}

function generate_elements(list, amount)
{
  let step = (2*Math.PI)/amount;
  let angle = 0;
  let x, y;
  for(let i=0; i<amount;i++)
  {
    let position = createVector(width/2, height/2);
    x = cos(angle) * 10; //amplyfi by 10 so its not in the middle
    y = sin(angle) * 10;
    let anglevector = createVector(x, y);
    anglevector.normalize();
    position.add(anglevector);
    //now take the x and y, and "translate to the middle"
    x += width/2;
    y += height/2;
    list.push(new pixel(position.x, position.y, 5, 5))
    console.log("x: "+ x + " y: " + y);
    angle += step;
  }
}
