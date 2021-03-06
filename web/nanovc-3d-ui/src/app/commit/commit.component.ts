import {Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";
import {Shape, Vector3, Vector3Tuple} from "three";

import { createRoundedSquare } from '../shapes'
import { offset } from '../points'
import {RepoComponentBase} from "../repo-component-base";

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent extends RepoComponentBase implements OnInit
{

  constructor()
  {
    super();
  }

  shape?: Shape;

  ngOnInit(): void
  {

    this.shape = createRoundedSquare(0, 0, 1, 0.2);
  }

}
