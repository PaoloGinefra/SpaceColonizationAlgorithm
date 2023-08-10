class Attractor {
  static radius = 10;
  constructor(position) {
    this.position = position;
  }

  draw() {
    fill(255, 255, 255);
    ellipse(
      this.position.x,
      this.position.y,
      Attractor.radius,
      Attractor.radius
    );
  }
}
