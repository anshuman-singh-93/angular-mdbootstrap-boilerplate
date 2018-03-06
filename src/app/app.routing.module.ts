import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LandingComponent} from "./modules/shared/landing/landing.component";

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: 'app/modules/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
  export class AppRoutingModule {}
