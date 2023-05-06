import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managevendor',
  templateUrl: './managevendor.component.html',
  styleUrls: ['./managevendor.component.css']
})
export class ManagevendorComponent {

addvendor = "";

constructor(private userService:UserService, private router:Router){}

addVendor(){
console.log(this.addvendor);

let vendor = {
  "vendorName":this.addvendor
}

this.userService.addVendor(vendor).subscribe(resp=>{
  console.log(resp)
  alert(resp.msg)

  this.router.navigateByUrl("/vendorList");

},error=>{
  console.log(error);
  alert(error.error.msg)
})


}

}
