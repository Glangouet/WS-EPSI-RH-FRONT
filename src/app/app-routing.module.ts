import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArbitrateComponent} from './arbitrate/arbitrate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'arbitrate', component: ArbitrateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
