import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email = "";
 

constructor (private userService:UserService, private router:Router){}

forgetpassword(){

console.log(this.email)


// this.userService.forgotPassword(this.email).subscribe({
  this.userService.forgotPassword(this.email).subscribe({
next: (resp) =>{
  
  console.log(resp)
  alert(resp.msg)
  this.router.navigateByUrl("/resetPassword")
   
  },
error:err=>{
  console.log(err)
  alert(err.msg)
}
})

}

}
