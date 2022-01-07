import {Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";
import {ExtrudeGeometry, Shape} from "three";
import {createRoundedSquare} from '../shapes'
import {RepoComponentBase} from "../repo-component-base";

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent extends RepoComponentBase implements OnInit
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
