import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { ManagesubcategoryComponent } from './managesubcategory/managesubcategory.component';
import { ManagecategorylistComponent } from './managecategorylist/managecategorylist.component';

const routes: Routes = [

{

  component:SignupComponent,
  path:"signup"

},

{

  component:SignupComponent,
  path:""

},
{

  component:LoginComponent,
  path:"login"

},

{

  component:ForgetPasswordComponent,
  path:"forgetpassword"

},
{

  component:ResetpasswordComponent,
  path:"resetPassword"
},
{

component:HomepageComponent,
path:"homePage"

},
{

  component:AdmindashboardComponent,
  path:"admindashboard"

},
{
component:ManagecategoryComponent,
path:"managecategory"

},
{
component:ManagesubcategoryComponent,
path:"managesubcategory"

},
{
  component:ManagecategorylistComponent,
  path:"managecategorylist"
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
