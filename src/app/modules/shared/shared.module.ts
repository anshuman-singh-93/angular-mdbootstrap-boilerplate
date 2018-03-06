import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {LandingComponent} from "./landing/landing.component";

const COMPONENTS = [ LandingComponent ];
const MODULES = [MDBBootstrapModule];

@NgModule({
  imports: [
    CommonModule,
    MODULES
  ],
  declarations: [ COMPONENTS ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [ COMPONENTS,MODULES ]

})
export class SharedModule { }
