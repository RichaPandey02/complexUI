import { AccountCircleComponent } from './../components/account-circle/account-circle.component';
import { DemoGraphicsComponent } from './../components/demo-graphics/demo-graphics.component';
import { CostofcareComponent } from './../components/costofcare/costofcare.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'costofcare', component:CostofcareComponent},
  {path:'demographics', component:DemoGraphicsComponent},
  {path:'accountcircle', component:AccountCircleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
