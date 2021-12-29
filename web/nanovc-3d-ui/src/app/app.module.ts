import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgtColorPipeModule, NgtCoreModule} from "@angular-three/core";
import { CubeComponent } from './cube/cube.component';
import {NgtMeshModule} from "@angular-three/core/meshes";
import {NgtBoxGeometryModule} from "@angular-three/core/geometries";
import {NgtMeshBasicMaterialModule, NgtMeshStandardMaterialModule} from "@angular-three/core/materials";
import {NgtAmbientLightModule, NgtSpotLightModule} from "@angular-three/core/lights";
import {NgtSobaOrbitControlsModule} from "@angular-three/soba/controls";
import {NgtGridHelperModule, NgtPolarGridHelperModule} from "@angular-three/core/helpers";
import {
  NgtSobaGizmoHelperModule,
  NgtSobaGizmoViewcubeModule,
  NgtSobaGizmoViewportModule
} from "@angular-three/soba/abstractions";

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
