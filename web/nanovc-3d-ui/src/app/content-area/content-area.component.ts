import {Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";
import {Shape} from "three";
import {Shapes} from "../shapes";

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {

  constructor() { }

  @Input() position?: NgtVector3;

  shape?: Shape;

  ngOnInit(): void {

    this.shape = Shapes.createRoundedSquare(0,0, 0.5, 0.1);
  }

}
