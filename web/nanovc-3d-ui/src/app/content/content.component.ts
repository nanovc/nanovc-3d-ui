import {Component, OnInit} from '@angular/core';
import {RepoComponentBase} from "../repo-component-base";
import {createRoundedSquare} from "../shapes";
import {Shape} from "three";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent extends RepoComponentBase implements OnInit
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
