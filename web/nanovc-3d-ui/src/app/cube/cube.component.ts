import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() position?: NgtVector3; // imported from @angular-three/core

  hover = false;
  active = false;

  onAnimate(mesh: THREE.Mesh) {
    mesh.rotation.x = mesh.rotation.y += 0.01;
  }

}
