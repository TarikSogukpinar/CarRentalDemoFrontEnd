import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './component/brand-add/brand-add.component';
import { BrandUpdateComponent } from './component/brand-update/brand-update.component';
import { BrandComponent } from './component/brand/brand.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { CarUpdateComponent } from './component/car-update/car-update.component';
import { CarComponent } from './component/car/car.component';
import { ColorAddComponent } from './component/color-add/color-add.component';
import { ColorUpdateComponent } from './component/color-update/color-update.component';
import { ColorComponent } from './component/color/color.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent ,canActivate:[LoginGuard]},
  {path:"cars", component:CarComponent, canActivate:[LoginGuard]},
  {path:"cars/category/:categoryId", component:CarComponent},
  {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"cars/update", component:CarUpdateComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"brand", component:BrandComponent, canActivate:[LoginGuard]},
  {path:"brand/add", component:BrandAddComponent, canActivate:[LoginGuard]},
  {path:"brand/update", component:BrandUpdateComponent, canActivate:[LoginGuard]},
  {path:"color", component:ColorComponent, canActivate:[LoginGuard]},
  {path:"color/add", component:ColorAddComponent, canActivate:[LoginGuard]},
  {path:"color/update", component:ColorUpdateComponent, canActivate:[LoginGuard]},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
