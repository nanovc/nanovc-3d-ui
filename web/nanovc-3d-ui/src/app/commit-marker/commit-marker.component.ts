import {Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";
import {Shape, Vector3, Vector3Tuple} from "three";
import { createRoundedSquare } from '../shapes'
import {RepoComponentBase} from "../repo-component-base";

@Component({
  selector: 'app-commit-marker',
  templateUrl: './commit-marker.component.html',
  styleUrls: ['./commit-marker.component.scss']
})
export class CommitMarkerComponent extends RepoComponentBase implements OnInit {

  constructor()
  {
    super();
  }

  shape?: Shape;

  ngOnInit(): void {

    this.shape = createRoundedSquare(0,0, 1, 0.2);
  }


}
