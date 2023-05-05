import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
fname = "";
lname = "";
email = "";
phone ="";
password = "";

constructor(private userService:UserService, private router:Router){

}

signUp(){

  console.log(this.fname)
  console.log(this.lname)
  console.log(this.email)
  console.log(this.phone)
  console.log(this.password)

  let user = {
    "fname":this.fname, 
    "lname":this.lname, 
    "email":this.email, 
    "phone":this.phone, 
    "password":this.password
  }
  // console.log(user.fname);
  

  this.userService.signUp(user).subscribe(resp=>{
    console.log(resp);
    alert(resp.msg)
    this.router.navigateByUrl("/login");
  })
  


}

}
