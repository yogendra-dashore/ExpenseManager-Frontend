import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  signUp(user:any):Observable<any>{
    let url=environment.apiUrl+"/user/create"
    let hdr = "hello";
    return this.http.post(url, user, {
      headers: {
        header:hdr
      }
    });
    return this.http.post(environment.apiUrl+"/signUp",user)
  }

  login(user:any):Observable<any>{
    return this.http.post(environment.apiUrl+"/login",user)
  }

  forgotPassword(email:any):Observable<any>
{
  return this.http.get(environment.apiUrl+"/forgotPassword/?email="+email)
}
resetPassword(otp:any, password:any, confirmpassword:any):Observable<any>{
  return this.http.get(environment.apiUrl+'/resetPassword/?otp='+otp+'&password='+password+'&confirmpassword='+confirmpassword);
  
}
    manageCategory(category:any):Observable<any>{
  return this.http.post(environment.apiUrl+"/categoryadd",category)
}

getAllCategory():Observable<any>{
  return this.http.get(environment.apiUrl+"/allcategory")
}

deleteCategoryById(id:any):Observable<any>{

  return this.http.delete(environment.apiUrl+"/deleteCategoryById/"+id)
}

manageSubCategory(user:any):Observable<any>{
  return this.http.post(environment.apiUrl+"/subCatAdd",user)
}

getAllSubCategory():Observable<any>{
  return this.http.get(environment.apiUrl+"/getAllSUbCategory")

}

deleteSubCategoryById(id:any):Observable<any>{
  return this.http.delete(environment.apiUrl+"/deleteSubCategory/"+id)
}

addVendor(user:any):Observable<any>{
  return this.http.post(environment.apiUrl+"/vendoradd",user)
}

getAllVendor():Observable<any>{
  return this.http.get(environment.apiUrl+"/getAllVen")

}

deleteVendorById(id:any):Observable<any>{
  return this.http.delete(environment.apiUrl+"/deleteVenById/"+id)
}


}
