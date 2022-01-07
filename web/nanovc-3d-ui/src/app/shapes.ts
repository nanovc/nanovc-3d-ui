import {Shape, Vector3, Vector3Tuple} from "three";
import {NgtVector3} from "@angular-three/core";

/**
 * Creates a rounded square shape.
 * @param x The x coordinate for the the middle of the rounded square.
 * @param y The y coordinate for the the middle of the rounded square.
 * @param size The size of each side (width and height) of the rounded square.
 * @param radius The radius of curvature for the rounded corners of the square.
 */
export function createRoundedSquare(x: number, y: number, size: number, radius: number): Shape
{
  const rad = radius;
  const deg90 = Math.PI / 2;
  const deg180 = Math.PI;
  const deg270 = deg180 + deg90;
  const halfWidth = size / 2;
  const bottomLeftX = x - halfWidth;
  const bottomLeftY = y - halfWidth;
  const topRightX = x + halfWidth;
  const topRightY = y + halfWidth;
  const result = new Shape()
    .moveTo(bottomLeftX + rad, bottomLeftY)
    .lineTo(topRightX - rad, bottomLeftY)
    .arc(0, rad, rad, -deg90, 0, false)
    .lineTo(topRightX, topRightY - rad)
    .arc(-rad, 0, rad, 0, deg90, false)
    .lineTo(bottomLeftX + rad, topRightY)
    .arc(0, -rad, rad, deg90, deg180, false)
    .lineTo(bottomLeftX, bottomLeftY + rad)
    .arc(rad, 0, rad, -deg180, -deg90, false)
  ;
  result.closePath();
  result.autoClose = true;
  return result;
}

/**
 * Creates the outline of a rounded square shape.
 * @param x The x coordinate for the the middle of the rounded square.
 * @param y The y coordinate for the the middle of the rounded square.
 * @param innerSize The size of each inner side (width and height) of the rounded square hole.
 * @param outerSize The size of each outer side (width and height) of the rounded square outline.
 * @param innerRadius The inner radius of curvature for the rounded corners of the square hole.
 * @param outerRadius The outer radius of curvature for the rounded corners of the square outline.
 * @return {Shape}
 */
export function createRoundedSquareOutline(x: number, y: number, innerSize: number, outerSize: number, innerRadius: number, outerRadius: number): Shape
{
  // Create the outer shape:
  const outerShape = createRoundedSquare(x, y, outerSize, outerRadius);

  // Create the shape for the inner hole:
  const innerShape = createRoundedSquare(x, y, innerSize, innerRadius);

  // Add a hole into the outer shape:
  outerShape.holes = [innerShape];

  return outerShape;
}
