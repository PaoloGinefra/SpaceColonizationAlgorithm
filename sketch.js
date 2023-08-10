let nAttractors = 100;
let Attractors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < nAttractors; i++) {
    Attractors.push(new Attractor(createVector(random(width), random(height))));
  }
}

function draw() {
  background("#1e1e1e");

  Attractors.forEach((attractor) => attractor.draw(p5));
}
