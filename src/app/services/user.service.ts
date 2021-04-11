import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../models/customerDetails';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://localhost:5001/api/users/';


  getById(id: number): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }


  updateInfo(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + "updateinfo";
    return this.httpClient.put<ResponseModel>(newPath, user);
  }
 


  getByEmail(email: string): Observable<SingleResponseModel<CustomerDetails>> {
    let newPath = this.apiUrl + "getbyemail?email=" + email;
    return this.httpClient.get<SingleResponseModel<CustomerDetails>>(newPath);
  }

}
