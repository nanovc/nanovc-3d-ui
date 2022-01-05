import {Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";
import {ExtrudeGeometry, Shape} from "three";
import {Shapes} from "../shapes";

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  constructor() { }

  @Input() position?: NgtVector3;

  shape?: Shape;

  ngOnInit(): void {

    this.shape = Shapes.createRoundedSquare(0,0, 1, 0.2);
  }


}
