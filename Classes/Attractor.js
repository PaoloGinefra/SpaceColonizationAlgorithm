class Attractor {
  static influenceRadius = 500;
  static killingRadius = 11;

  constructor(position) {
    this.position = position;
  }

  draw() {
    fill(255, 255, 255);
    ellipse(
      this.position.x,
      this.position.y,
      Attractor.killingRadius,
      Attractor.killingRadius
    );
  }
}
