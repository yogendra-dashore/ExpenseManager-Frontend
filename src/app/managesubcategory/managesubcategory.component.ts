import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managesubcategory',
  templateUrl: './managesubcategory.component.html',
  styleUrls: ['./managesubcategory.component.css']
})
export class ManagesubcategoryComponent {

addsubcategory = "";

constructor(private userService:UserService, private router:Router){}


manageSubCategory(){
  console.log(this.addsubcategory);

  let subCategory = {
    "subcategoryName":this.addsubcategory
  }

  this.userService.manageSubCategory(subCategory).subscribe(resp=>{
    console.log(resp)
    alert(resp.msg)

    this.router.navigateByUrl("/subCatList");

  },error=>{
    console.log(error);
    alert(error.error.msg)
  }
  
  )

}

}
