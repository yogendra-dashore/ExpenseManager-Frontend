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
    // console.log(user.fname);
    
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

}
