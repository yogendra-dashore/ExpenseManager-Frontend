import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-managecategorylist',
  templateUrl: './managecategorylist.component.html',
  styleUrls: ['./managecategorylist.component.css']
})
export class ManagecategorylistComponent {

constructor(private userService:UserService){}

categoryList = []
ngOnInit(){
this.userService.getAllCategory().subscribe(resp =>{
console.log(resp)
this.categoryList = resp.data
})

}

deleteCategory(id:any){
  console.log("CategoryId=>"+id);
  this.userService.deleteCategoryById(id).subscribe(resp=>{

    this.categoryList=this.categoryList.filter(user=> user['categoryid'] != id);
    
  })
}

}
