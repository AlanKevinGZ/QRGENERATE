import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateqrComponent } from './scanner/generateqr/generateqr.component';
import { QrdategenerateComponent } from './scanner/qrdategenerate/qrdategenerate.component';
import { HomePageComponent } from './scanner/home-page/home-page.component';

const routes: Routes = [
  { path:'', component:HomePageComponent  },
  { path:'date', component:QrdategenerateComponent},
  { path:'excel', component:GenerateqrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
