import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {

otp:Number=0;
password="";
confirmpassword="";

constructor(private userService:UserService, private router:Router){

}
resetPassword(){

  this.userService.resetPassword(this.otp, this.password, this.confirmpassword).subscribe({
    next: (resp) =>{
  if(resp.data!=null)
  {
     
    console.log(resp.msg)
    alert(resp.msg)
    this.router.navigateByUrl("/login")
  }
  else{
    console.log(resp.msg)
    alert(resp.msg)
  }
       
      
    
      
    }
    })

}

}
