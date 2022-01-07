import {Component, Input, OnInit} from '@angular/core';
import {RepoComponentBase} from "../repo-component-base";
import {CubicBezierCurve3, Shape} from "three";
import {createRoundedSquare} from "../shapes";
import {Curve} from "three/src/extras/core/Curve";
import {Vector3} from "three/src/math/Vector3";
import {NgtVector3} from "@angular-three/core";

@Component({
  selector: 'app-content-link',
  templateUrl: './content-link.component.html',
  styleUrls: ['./content-link.component.scss']
})
export class ContentLinkComponent extends RepoComponentBase implements OnInit {

  constructor()
  {
    super();
  }

  /**
   * The position for the start of the content link.
   * @type {NgtVector3}
   */
  @Input() startPosition?: NgtVector3;

  /**
   * The position for the end of the content link.
   * @type {NgtVector3}
   */
  @Input() endPosition?: NgtVector3;

  /**
   * The direction in which we want to travel.
   * @type {NgtVector3}
   */
  @Input() direction?: NgtVector3;

  /**
   * The thickness of the link.
   * @type {NgtVector3}
   */
  @Input() thickness?: number = 0.1;

  curve?: Curve<Vector3>;

  ngOnInit(): void {
    this.curve = this.createConnectingSpline(
      this.startPosition ? this.toVector3(this.startPosition) : new Vector3(-1,-1,0),
      this.endPosition ? this.toVector3(this.endPosition) : new Vector3(1,1,0),
      this.direction ? this.toVector3(this.direction) : new Vector3(1,0,0),
    );
  }

  createConnectingSpline(startPosition: Vector3, endPosition: Vector3, direction: Vector3): Curve<Vector3>
  {
    // Work out the vector from the start to the finish:
    const delta = endPosition.clone();
    delta.sub(startPosition);

    // Work out the vector from the finish to the start:
    const oppositeDelta = startPosition.clone();
    oppositeDelta.sub(endPosition);

    // Work out the start control point:
    const startControlDelta = delta.clone();
    startControlDelta.projectOnVector(direction);
    startControlDelta.multiplyScalar(0.5);
    const startControlPoint = startPosition.clone();
    startControlPoint.add(startControlDelta);

    // Work out the end control point:
    const oppositeDirection = direction.clone();
    oppositeDirection.negate();
    const endControlDelta = oppositeDelta.clone();
    endControlDelta.projectOnVector(oppositeDirection);
    endControlDelta.multiplyScalar(0.5);
    const endControlPoint = endPosition.clone();
    endControlPoint.add(endControlDelta);

    // Create a cubic bezier curve in 3d:
    // https://threejs.org/docs/#api/en/extras/curves/CubicBezierCurve3
    const curve = new CubicBezierCurve3(
      startPosition,
      startControlPoint,
      endControlPoint,
      endPosition,
    );
    return curve;
  }

}
