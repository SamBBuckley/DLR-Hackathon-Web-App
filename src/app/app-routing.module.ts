import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {PoolLandingComponent} from './pool/pool-landing/pool-landing.component';
import {UserLandingComponent} from './user/user-landing/user-landing.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'pools', component: PoolLandingComponent},
  {path: 'users', component: UserLandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
