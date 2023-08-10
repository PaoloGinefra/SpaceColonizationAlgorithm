class Node {
  static segmentLenght = 10;
  constructor(position, parent) {
    this.position = position;
    this.direction = createVector(0, 0);
    this.parent = parent;
  }

  draw() {
    if (this.parent == null) return;
    stroke(255, 255, 255);
    strokeWeight(1);
    line(
      this.position.x,
      this.position.y,
      this.parent.position.x,
      this.parent.position.y
    );
  }
}
