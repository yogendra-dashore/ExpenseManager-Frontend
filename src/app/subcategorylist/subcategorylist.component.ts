import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-subcategorylist',
  templateUrl: './subcategorylist.component.html',
  styleUrls: ['./subcategorylist.component.css']
})
export class SubcategorylistComponent {

  constructor(private userService:UserService){}

  subCatList = []

  ngOnInit(){
    this.userService.getAllSubCategory().subscribe(resp=>{
      console.log(resp)
      this.subCatList = resp.data
    })

  }

  deleteSubCategory(id:any){
console.log("subcategoryId=>"+id);
this.userService.deleteSubCategoryById(id).subscribe(resp=>{

this.subCatList=this.subCatList.filter(subcategory=> subcategory['subcategoryId'] != id);

})

  }


}
