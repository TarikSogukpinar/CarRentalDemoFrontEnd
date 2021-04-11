import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { LoginModel } from '../models/loginModel';
import { PasswordChangeModel } from '../models/passwordChangeModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenDetail, TokenModel } from '../models/tokenModel';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenDetail = new TokenDetail()
  userId: number;

  apiUrl = 'https://localhost:5001/api/auth/';
  constructor(private httpClient: HttpClient, private localStorageService:LocalstorageService) { }

  login(loginModel: LoginModel) {
    let loginPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(loginPath, loginModel);
    // return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel)
  }

  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    let registerPath = this.apiUrl + "register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(registerPath, registerModel);
  }
  isAuthenticated(): boolean {
    if (this.localStorageService.getToken()) { return true; }
    else { return false; }
  }

  passwordChange(userPassword:PasswordChangeModel):Observable<SingleResponseModel<PasswordChangeModel>>{
    let newPath=this.apiUrl+"changepassword";
    return this.httpClient.post<SingleResponseModel<PasswordChangeModel>>(newPath,userPassword);
  }
  logout() {
    this.localStorageService.removeToken()
    this.tokenDetail = new TokenDetail()
  }

  
  changePassword(passwordChangeModel:PasswordChangeModel):Observable<ResponseModel>{
    let newPath = this.apiUrl + "changepassword"
    return this.httpClient.post<ResponseModel>(newPath,passwordChangeModel)
  }


  getCurrentUserId():number {
    return this.userId
  }


}
