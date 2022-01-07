import {Shape, Vector3, Vector3Tuple} from "three";
import {NgtVector3} from "@angular-three/core";
import {isNumeric} from "rxjs/internal-compatibility";

/**
 * This offsets the given position by the specified amount.
 * It returns a new vector with the offset position.
 * @param position The starting position to offset from.
 * @param x The x amount to offset by.
 * @param y The y amount to offset by.
 * @param z The z amount to offset by.
 * @return {THREE.Vector3}
 */
export function offset(position: NgtVector3, x: number, y: number, z: number): NgtVector3
{
  const pos = (position instanceof Vector3) ? position : new Vector3().fromArray(position as Vector3Tuple);
  return pos.clone().add(new Vector3(x, y, z));
}

/**
 * This scales the given vector by the specified amount.
 * It returns a new vector with the offset position.
 * @param vector The starting position to offset from.
 * @param x The x amount to scale by.
 * @param y The y amount to scale by.
 * @param z The z amount to scale by.
 * @return {THREE.Vector3}
 */
export function scale(vector: NgtVector3, x: number, y: number, z: number): NgtVector3
{
  const result = vector ?
    (vector instanceof Vector3) ? vector :
      typeof vector === 'number' ? new Vector3(vector, vector, vector) :
      new Vector3().fromArray(vector as Vector3Tuple) :
    new Vector3(1, 1, 1);
  return result.clone().multiply(new Vector3(x, y, z));
}
