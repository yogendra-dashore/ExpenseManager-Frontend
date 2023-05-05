import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = "";
  password = "";

constructor(private userService:UserService){}

login(){
  console.log(this.email)
  console.log(this.password)

let user = {
  "email":this.email,
  "password":this.password
}

this.userService.login(user).subscribe(resp=>{

  let token = resp.data.token;
  localStorage.setItem("token",token);

  let token2 = localStorage.getItem("token");

  // localStorage.clear();   == logout


  console.log(resp);
  alert(resp.msg)

},error=>{
  console.log(error);
  alert(error.error.msg);
  
})

}


}
