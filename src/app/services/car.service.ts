import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getallcars"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByCategory(categoryId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/addcars", car);
  }

  update(car:Car) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "cars/updatecars"
    return this.httpClient.post<ResponseModel>(newPath, car)
  }
}
