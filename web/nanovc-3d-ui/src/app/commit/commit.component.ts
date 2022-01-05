import {Component, Input, OnInit} from '@angular/core';
import {NgtVector3} from "@angular-three/core";
import {Shape} from "three";
import {Shapes} from "../shapes";

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {

  constructor() { }

  @Input() position?: NgtVector3;

  shape?: Shape;

  ngOnInit(): void {

    this.shape = Shapes.createRoundedSquare(0,0, 1, 0.2);
  }

}
