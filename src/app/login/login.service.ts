import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean=false;

  constructor() { }

  login(email:string, password:string){
    if(email==="admin@gmail.com" && password==="Admin"){
      // alert("Login Successful");
      // this.route.navigate(['/rooms','add']);
      this.isLoggedIn=true;
    }
    return this.isLoggedIn;
  }
}
