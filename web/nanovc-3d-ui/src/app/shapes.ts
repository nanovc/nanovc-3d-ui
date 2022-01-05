import {Shape} from "three";

export class Shapes
{
  /**
   * Creates a rounded square shape.
   * @param x The x coordinate for the the middle of the rounded square.
   * @param y The y coordinate for the the middle of the rounded square.
   * @param size The size of each side (width and height) of the rounded square.
   * @param radius The radius of curvature for the rounded corners of the square.
   */
  static createRoundedSquare(x: number, y: number, size: number, radius: number): Shape
  {
    const rad = radius;
    const deg90 = Math.PI / 2;
    const deg180 = Math.PI;
    const halfWidth = size / 2;
    const bottomLeftX = x - halfWidth;
    const bottomLeftY = y - halfWidth;
    const topRightX = x + halfWidth;
    const topRightY = y + halfWidth;
    return new Shape()
      .moveTo(bottomLeftX + rad, bottomLeftY)
      .lineTo(topRightX - rad, bottomLeftY)
      .arc(0, rad, rad, -deg90, 0, false)
      .lineTo(topRightX, topRightY - rad)
      .arc(-rad, 0, rad, 0, deg90, false)
      .lineTo(bottomLeftX + rad, topRightY)
      .arc(0, -rad, rad, deg90, deg180, false)
      .lineTo(bottomLeftX, bottomLeftY + rad)
      .arc(rad, 0, rad, deg180, -deg90, false);
  }
}
