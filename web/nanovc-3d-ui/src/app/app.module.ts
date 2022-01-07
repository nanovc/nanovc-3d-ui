import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgtColorPipeModule, NgtCoreModule, NgtMathPipeModule} from "@angular-three/core";
import { CubeComponent } from './cube/cube.component';
import {NgtMeshModule} from "@angular-three/core/meshes";
import {
  NgtBoxGeometryModule, NgtCylinderGeometryModule,
  NgtExtrudeGeometryModule,
  NgtShapeGeometryModule,
  NgtSphereGeometryModule
} from "@angular-three/core/geometries";
import {
  NgtMeshBasicMaterialModule,
  NgtMeshNormalMaterialModule, NgtMeshPhysicalMaterialModule,
  NgtMeshStandardMaterialModule
} from "@angular-three/core/materials";
import {NgtAmbientLightModule, NgtSpotLightModule} from "@angular-three/core/lights";
import {NgtSobaOrbitControlsModule} from "@angular-three/soba/controls";
import {NgtGridHelperModule, NgtPolarGridHelperModule} from "@angular-three/core/helpers";
import {
  NgtSobaGizmoHelperModule,
  NgtSobaGizmoViewcubeModule,
  NgtSobaGizmoViewportModule
} from "@angular-three/soba/abstractions";
import { RepoComponent } from './repo/repo.component';
import { CommitComponent } from './commit/commit.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { CommitMarkerComponent } from './commit-marker/commit-marker.component';
import {RepoComponentBase} from "./repo-component-base";

@NgModule({
  declarations: [
    AppComponent,
    RepoComponentBase,
    CubeComponent,
    RepoComponent,
    CommitComponent,
    ContentAreaComponent,
    CommitMarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgtCoreModule,
    NgtMeshModule,
    NgtBoxGeometryModule,
    NgtMeshBasicMaterialModule,
    NgtMeshStandardMaterialModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtSobaOrbitControlsModule,
    NgtGridHelperModule,
    NgtSobaGizmoHelperModule,
    NgtSobaGizmoViewportModule,
    NgtSobaGizmoViewcubeModule,
    NgtColorPipeModule,
    NgtShapeGeometryModule,
    NgtExtrudeGeometryModule,
    NgtMathPipeModule,
    NgtSphereGeometryModule,
    NgtMeshNormalMaterialModule,
    NgtMeshPhysicalMaterialModule,
    NgtCylinderGeometryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
