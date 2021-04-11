import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './component/car/car.component';
import { CategoryComponent } from './component/category/category.component';
import { NaviComponent } from './component/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { LoginComponent } from './component/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { BrandAddComponent } from './component/brand-add/brand-add.component';
import { BrandUpdateComponent } from './component/brand-update/brand-update.component';
import { BrandComponent } from './component/brand/brand.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { CarUpdateComponent } from './component/car-update/car-update.component';
import { ColorComponent } from './component/color/color.component';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { ColorAddComponent } from './component/color-add/color-add.component';
import { ColorUpdateComponent } from './component/color-update/color-update.component';




@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    CarAddComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    ChangePasswordComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    BrandComponent,
    FilterBrandPipe,
    CarUpdateComponent,
    ColorComponent,
    FilterColorPipe,
    ColorAddComponent,
    ColorUpdateComponent,
   
  
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
