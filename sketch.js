let nAttractors = 1000;
let Attractors = [];

let Nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < nAttractors; i++) {
    Attractors.push(new Attractor(createVector(random(width), random(height))));
  }

  Nodes.push(new Node(createVector(width / 2, height / 2), null));
}

function draw() {
  background("#1e1e1e");

  Nodes.forEach((node) => node.direction.mult(0));

  let parentNodes = new Set();

  for (let i = Attractors.length - 1; i >= 0; i--) {
    currentAttractor = Attractors[i];

    let minDist = Attractor.influenceRadius;
    let minNode = null;

    Nodes.forEach((node) => {
      let dist = currentAttractor.position.dist(node.position);
      if (dist < minDist) {
        minDist = dist;
        minNode = node;
      }
    });

    if (minDist < Attractor.killingRadius) {
      Attractors.splice(i, 1);
      continue;
    }

    if (minNode != null) {
      parentNodes.add(minNode);
      minNode.direction.add(
        p5.Vector.sub(currentAttractor.position, minNode.position).normalize()
      );
    }
  }

  parentNodes.forEach((node) => {
    let newNode = new Node(
      p5.Vector.add(
        node.position,
        p5.Vector.mult(node.direction.normalize(), Node.segmentLenght)
      ),
      node
    );
    Nodes.push(newNode);
  });

  Attractors.forEach((attractor) => attractor.draw(p5));

  Nodes.forEach((node) => node.draw(p5));
}
