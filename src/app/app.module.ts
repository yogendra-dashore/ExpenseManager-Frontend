import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { ManagesubcategoryComponent } from './managesubcategory/managesubcategory.component';
import { ManagecategorylistComponent } from './managecategorylist/managecategorylist.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { ManagevendorComponent } from './managevendor/managevendor.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component'
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetpasswordComponent,
    HomepageComponent,
    AdmindashboardComponent,
    ManagecategoryComponent,
    ManagesubcategoryComponent,
    ManagecategorylistComponent,
    SubcategorylistComponent,
    ManagevendorComponent,
    VendorlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
