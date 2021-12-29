import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgtCoreModule} from "@angular-three/core";
import { CubeComponent } from './cube/cube.component';
import {NgtMeshModule} from "@angular-three/core/meshes";
import {NgtBoxGeometryModule} from "@angular-three/core/geometries";
import {NgtMeshBasicMaterialModule, NgtMeshStandardMaterialModule} from "@angular-three/core/materials";
import {NgtAmbientLightModule, NgtSpotLightModule} from "@angular-three/core/lights";

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
