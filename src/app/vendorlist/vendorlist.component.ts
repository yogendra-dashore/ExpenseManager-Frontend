import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent {

constructor(private userService:UserService){}

vendorlist = []

ngOnInit(){
this.userService.getAllVendor().subscribe(resp=>{
  console.log(resp)
  this.vendorlist = resp.data
})

}

deleteVendor(id:any){
  console.log("vendorId=>"+id);
  this.userService.deleteVendorById(id).subscribe(resp=>{

    this.vendorlist=this.vendorlist.filter(vendor=> vendor['vendorId'] != id);
  })
}

}
