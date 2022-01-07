import {Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";
import {Shape} from "three";
import {createRoundedSquare, createRoundedSquareOutline} from '../shapes'
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

  /**
   * This is the shape for the base (flat area) of the content area.
   * @type {Shape}
   */
  shapeBase?: Shape;

  /**
   * This is the shape for the border of the content area.
   * @type {Shape}
   */
  shapeBorder?: Shape;

  ngOnInit(): void {

    this.shapeBase = createRoundedSquare(0,0, 0.49, 0.1);
    this.shapeBorder = createRoundedSquareOutline(0,0, 0.48, 0.5, 0.1, 0.1);
  }

}
