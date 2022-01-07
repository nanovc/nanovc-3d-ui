import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  NgtCoreModule,
  NgtColorPipeModule,
  NgtSidePipeModule,
  NgtMathPipeModule
} from "@angular-three/core";
import {NgtGroupModule} from "@angular-three/core/group";
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
import {CubeComponent} from './cube/cube.component';
import {RepoComponent} from './repo/repo.component';
import {CommitComponent} from './commit/commit.component';
import {ContentAreaComponent} from './content-area/content-area.component';
import {CommitMarkerComponent} from './commit-marker/commit-marker.component';
import {RepoComponentBase} from "./repo-component-base";
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponentBase,
    CubeComponent,
    RepoComponent,
    CommitComponent,
    ContentAreaComponent,
    CommitMarkerComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgtCoreModule,
    NgtMeshModule,
    NgtGroupModule,
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
    NgtSidePipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
