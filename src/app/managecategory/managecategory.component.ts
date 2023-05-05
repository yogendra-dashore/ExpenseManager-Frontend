import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent {

  addcategory=""

  constructor(private userService:UserService, private router:Router){}

  manageCategory(){
   
    console.log(this.addcategory);

    let user = {
      "categoryName":this.addcategory
    }

    this.userService.manageCategory(user).subscribe(resp =>{
      console.log(resp)
      alert(resp.msg);


      this.router.navigateByUrl("/managecategorylist")

    },error=>{
      console.log(error);
      alert(error.error.msg);
    })

  }

}
