import {offset, toVector3} from './points'
import {scale} from './points'
import {NgtVector3} from "@angular-three/core";
import {Component, Input} from "@angular/core";
import {Vector3} from "three";

@Component({
  selector: 'app-repo-component-base',
  template: ``
})
export class RepoComponentBase
{
  /**
   * The position for the repo component.
   * @type {NgtVector3}
   */
  @Input() position?: NgtVector3;

  /**
   * The scale for the repo component.
   * @type {NgtVector3}
   */
  @Input() scale?: NgtVector3 = 1;

  /**
   * This provides common helper functions so that we can call it from the HTML.
   * This offsets the given position by the specified amount.
   * It returns a new vector with the offset position.
   * @param position The starting position to offset from.
   * @param x The x amount to offset by.
   * @param y The y amount to offset by.
   * @param z The z amount to offset by.
   * @type {(position: NgtVector3, x: number, y: number, z: number) => NgtVector3}
   */
  offset = offset;

  /**
   * This provides common helper functions so that we can call it from the HTML.
   * Converts the given vector definition to an actual vector.
   * @param vector The vector definition to convert.
   * @param defaultValue The default value to use if the vector was not specified.
   * @type {(vector: NgtVector3, defaultValue?: Vector3) => Vector3}
   */
  toVector3 = toVector3;

  /**
   * This gives us a new vector that is offset from the current components position.
   * @param x The x amount to offset by.
   * @param y The y amount to offset by.
   * @param z The z amount to offset by.
   * @returns {NgtVector3}
   */
  offsetBy(x: number, y: number, z: number): NgtVector3
  {
    return this.position ? this.offset(this.position, x, y, z) : new Vector3(0, 0, 0);
  }

}
