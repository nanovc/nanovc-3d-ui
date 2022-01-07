import {Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";
import {Shape} from "three";
import { createRoundedSquare } from '../shapes'
import {RepoComponentBase} from "../repo-component-base";

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent extends RepoComponentBase implements OnInit {

  constructor()
  {
    super();
  }

  shape?: Shape;

  ngOnInit(): void {

    this.shape = createRoundedSquare(0,0, 0.5, 0.1);
  }

}
