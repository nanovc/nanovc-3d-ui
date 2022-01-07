import {Shape, Vector3, Vector3Tuple} from "three";
import {NgtVector3} from "@angular-three/core";

/**
 * This offsets the given position by the specified amount.
 * It returns a new vector with the offset position.
 * HACK: While we wait for the ngt-group functionality, we use this to mimic relative offsets:
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
